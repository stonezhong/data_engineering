!function(e){var t={};function a(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=t,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=28)}([function(e,t){e.exports=React},,,function(e,t){function a(t){return e.exports=a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},a(t)}e.exports=a},,function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t){function a(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}e.exports=function(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}},function(e,t,a){var n=a(11);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}},function(e,t,a){var n=a(12),r=a(13);e.exports=function(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?r(e):t}},,,function(e,t){function a(t,n){return e.exports=a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},a(t,n)}e.exports=a},function(e,t){function a(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=a=function(e){return typeof e}:e.exports=a=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(t)}e.exports=a},function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},,,,,,,,,,,,,,,function(e,t,a){"use strict";a.r(t);var n=a(5),r=a.n(n),o=a(6),l=a.n(o),i=a(7),s=a.n(i),c=a(8),u=a.n(c),p=a(3),f=a.n(p),d=a(0),m=a.n(d);function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=f()(e);if(t){var r=f()(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return u()(this,a)}}var y=function(e){s()(a,e);var t=h(a);function a(){return r()(this,a),t.apply(this,arguments)}return l()(a,[{key:"render",value:function(){return m.a.createElement("div",null,m.a.createElement("div",null,m.a.createElement("ul",null,m.a.createElement("li",null,m.a.createElement("a",{href:"#Basic-Data-Lake-Design-Example"},"Basic Data Lake Design Example")),m.a.createElement("li",null,m.a.createElement("a",{href:"#Data-Lake-Design-Goals"},"Data Lake Design Goals"),m.a.createElement("ul",null,m.a.createElement("li",null,m.a.createElement("a",{href:"#data_security"},"Data Security")),m.a.createElement("li",null,m.a.createElement("a",{href:"#processing_data_at_scale"},"Processing Data at Scale")),m.a.createElement("li",null,m.a.createElement("a",{href:"#streaming_and_or_batching_process"},"Streaming vs Batching Process")),m.a.createElement("li",null,m.a.createElement("a",{href:"#data_visualization"},"Data Visualization")),m.a.createElement("li",null,m.a.createElement("a",{href:"#ETL_Pipeline_Orchestration"},"ETL Pipeline Orchestration")),m.a.createElement("li",null,m.a.createElement("a",{href:"#Devop_Integration"},"Devop Integration")))))),m.a.createElement("h1",{id:"Basic-Data-Lake-Design-Example"},"Basic Data Lake Design Example"),m.a.createElement("p",null,m.a.createElement("img",{src:"resources/data-lake-design.png"}),m.a.createElement("br",null),"Hightlights:",m.a.createElement("ul",null,m.a.createElement("li",null,"Uses AWS EMR as Apache Spark Engine"),m.a.createElement("li",null,"Stores all assets, mainly parquet files in S3 buckets"),m.a.createElement("li",null,"Use Apache Airflow to orchestrate data ingestion jobs and data transformation jobs, airflow tasks talks to livy interface to spawn spark batch jobs"),m.a.createElement("li",null,"Uses Jupyter Hub for user who want to explore the data with notebooks, jupyter notebook talks to livy interface to spawn spark session, user can write pyspark code or scala code to launch spark job interactively"),m.a.createElement("li",null,"When data assets are produced in S3, they also gets registered in Data Catalog Service"),m.a.createElement("li",null,"Some ETL job will generate reports and write to MySQL via spark's JDBC connection"),m.a.createElement("li",null,"Uses Apache Superset to build charts and dashboards for data visualization, superset read data from MySQL"))),m.a.createElement("h1",{id:"Data-Lake-Design-Goals"},"Data Lake Design Goals"),m.a.createElement("h2",{id:"data_security"},"Data Security"),m.a.createElement("p",null,"Access to data should only be granted to authorized identity. Access to data should be audited. All data access operation (or attempt) should be tracked."),m.a.createElement("h2",{id:"processing_data_at_scale"},"Processing Data at Scale"),m.a.createElement("p",null,"As business grows, your data may grow as well. In many scenarios, your data lake need to be able to process data at scale. For example, scanning a table of 1 billion rows of transaction data and calculate the revenue group by merchant id. The industry is shifted to big data realted technologies such as Apache Spark from traditional analytical database as compute engine for processing data at scale."),m.a.createElement("h2",{id:"streaming_and_or_batching_process"},"Streaming vs Batching Process"),m.a.createElement("p",null,"In additional to processing data in batches with ETL pipelines, you need to decide if your business requires processing streaming data. For example, a stock broker sends trading summary to everyone at the end of day, it is a typical batching process. However, bank's ATM system might monitor all the ATM transactions and may suspend potential fraudulent transaction ASAP, the sooner you can process the data and discover fraudulent transactions, the more loss you can prevent.",m.a.createElement("ul",null,m.a.createElement("li",null,"Apache Spark support batching process, with spark streaming, it also support near-real-time streaming processing."),m.a.createElement("li",null,"Apache Flink can hande real-time streaming data at scale"),m.a.createElement("li",null,"Apache Strom is another streaming processing platform"))),m.a.createElement("h2",{id:"data_visualization"},"Data Visualization"),m.a.createElement("p",null,"Visualized data is easier to understand, and get vision from it. For example, looking at stock chart is better than looking at 5-minute trading record of a stock, with chart, you can see the trend better than looking at trading transactions table.",m.a.createElement("br",null),m.a.createElement("br",null),"People sometimes also call it BI, or Business Intelligence. Here is an incomplete list of data visualization platforms:",m.a.createElement("br",null),m.a.createElement("ul",null,m.a.createElement("li",null,"Apache Superset"),m.a.createElement("li",null,"Microsoft Power BI"),m.a.createElement("li",null,"Tableau"))),m.a.createElement("h2",{id:"ETL_Pipeline_Orchestration"},"ETL Pipeline Orchestration"),m.a.createElement("p",null,"Apache Airflow is a commonly used to orchestrate your ETL pipelines, main features includes:",m.a.createElement("ul",null,m.a.createElement("li",null,"You can create DAG which contains bunch of tasks, and specify dependency between tasks."),m.a.createElement("li",null,"You can set execution schedule for your DAG"),m.a.createElement("li",null,"You have a Web UI, allows you to browse the DAG status, recover failed DAG-run."))),m.a.createElement("h2",{id:"Devop_Integration"},"Devop Integration"),m.a.createElement("p",null,"Your data lake need to integrate with your company's devop system. For example, operational failure can be surfaced to devop people.",m.a.createElement("br",null),"For example, you do not want a ETL pieline failure slip silently."))}}]),a}(m.a.Component);window.ContentComponent=y}]);