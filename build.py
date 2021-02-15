#!/usr/bin/env python
# -*- coding: UTF-8 -*-
import os
import argparse
import json
import subprocess
import shutil
import html

from jinja2 import Template

BASE_DIR = os.path.dirname(os.path.abspath(__file__))

class WebsiteGenerator:
    def __init__(self, base_dir, site_prefix):
        self.base_dir = base_dir
        self.site_prefix = site_prefix

    def generate(self):
        if not self.check_env():
            return

        with open(os.path.join(self.base_dir, "src", "config.json"), "r") as f:
            config = json.load(f)
        self.build(config)

    def check_env(self):
        r = subprocess.call(["node", "--version"], stdout=subprocess.DEVNULL, stderr=subprocess.STDOUT)
        if r != 0:
            print("Please install nodejs first!")
            return False

        r = subprocess.call(["npm", "version"], stdout=subprocess.DEVNULL, stderr=subprocess.STDOUT)
        if r != 0:
            print("Please install npm first")
            return False

        return True


    def copy_page(self, page_name, config):
        # create page directory first
        page_dir = os.path.join(self.base_dir, "docs", "pages", page_name)
        if os.path.isdir(page_dir):
            shutil.rmtree(page_dir)
        os.makedirs(page_dir)

        # copy the index.html.template to the page
        page_desc = config['pages'][page_name]

        # generate page content component
        with open(os.path.join(self.base_dir, "src", "content.jsx.template"), "rt") as f:
            template = Template(f.read())

        src_page_dir = os.path.join(self.base_dir, "src", "pages", page_name)
        if not os.path.isdir(src_page_dir):
            os.makedirs(src_page_dir)
        if os.path.isfile(os.path.join(src_page_dir, "index.html")):
            with open(os.path.join(self.base_dir, "src", "pages", page_name, "index.html"), "rt") as f:
                page_content = f.read()
        else:
            page_content = ""

        if os.path.isfile(os.path.join(src_page_dir, "page.scss")):
            css = "./page.scss"
        else:
            css = None

        output = template.render({
            "content"   : page_content,
            "css"       : css
        })
        with open(os.path.join(src_page_dir, "content.jsx"), "wt") as f:
            f.write(output)

        # generate page
        with open(os.path.join(self.base_dir, "src", "page.html.template"), "rt") as f:
            template = Template(f.read())
        page_config = json.dumps({
            "config": config,
            "page_name": page_name,
            "site_prefix": self.site_prefix,
        })
        output = template.render({
            "site_prefix"   : self.site_prefix,
            "page_name"     : page_name,
            "title"         : html.escape(page_desc['title']),
            "page_config"   : html.escape(page_config)
        })
        with open(os.path.join(page_dir, "page.html"), "wt") as f:
            f.write(output)
        if config['home'] == page_name:
            with open(os.path.join(self.base_dir, "docs", "index.html"), "wt") as f:
                f.write(output)



    def copy_dir(self, src_dir, dst_dir):
        if os.path.isdir(dst_dir):
            shutil.rmtree(dst_dir)
        shutil.copytree(src_dir, dst_dir)

    def build(self, config):
        # Copy src/static/css to docs/pages/static/css
        src_dir = os.path.join(self.base_dir, "src", "static", "css")
        dst_dir = os.path.join(self.base_dir, "docs", "static", "css")
        self.copy_dir(src_dir, dst_dir)

        # Copy src/static/images to docs/pages/static/images
        src_dir = os.path.join(self.base_dir, "src", "static", "images")
        dst_dir = os.path.join(self.base_dir, "docs", "static", "images")
        self.copy_dir(src_dir, dst_dir)

        for page_name in config['pages'].keys():
            self.copy_page(page_name, config)

        # compile js
        # generate webpack config
        with open(os.path.join(self.base_dir, "src", "webpack.config.js.template"), "rt") as f:
            template = Template(f.read())
        output = template.render({
            "pages"   : config['pages']
        })
        with open(os.path.join(self.base_dir, "webpack.config.js"), "wt") as f:
            f.write(output)

        r = subprocess.call("npm run build-prod", shell=True)
        if r != 0:
            print(f"Build javascript failed, exit code = {r}")
            return False


        return True


def main():
    parser = argparse.ArgumentParser(
        description='Build content web site'
    )
    parser.add_argument(
        "--base-dir", type=str, required=False, help="Project base dir",
        default=BASE_DIR
    )
    parser.add_argument(
        "--site-prefix", type=str, required=False, help="Web Site URL prefix",
        default=""
    )
    args = parser.parse_args()

    wg = WebsiteGenerator(args.base_dir, args.site_prefix)
    wg.generate()

if __name__ == '__main__':
    main()
