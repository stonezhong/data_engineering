!function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=28)}([function(e,t){e.exports=React},,function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},,function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}e.exports=function(e,t,a){return t&&n(e.prototype,t),a&&n(e,a),e}},function(e,t,n){var a=n(10);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}},function(e,t,n){var a=n(11),r=n(12);e.exports=function(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?r(e):t}},,,function(e,t){function n(t,a){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,a)}e.exports=n},function(e,t){function n(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},,,,,,,,,,,,,,,,function(e,t,n){"use strict";n.r(t);var a=n(4),r=n.n(a),o=n(5),l=n.n(o),i=n(6),c=n.n(i),s=n(7),u=n.n(s),f=n(2),p=n.n(f),d=n(0),m=n.n(d);function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=p()(e);if(t){var r=p()(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return u()(this,n)}}var y=function(e){c()(n,e);var t=h(n);function n(){return r()(this,n),t.apply(this,arguments)}return l()(n,[{key:"render",value:function(){return m.a.createElement("div",null,m.a.createElement("p",null,"I am collecting best practices for Data Lake design and implementation."),"Here is a list of high level goals you may consider when building a data lake:",m.a.createElement("ul",null,m.a.createElement("li",null,m.a.createElement("a",{href:"#data_security"},"Data Security")),m.a.createElement("li",null,m.a.createElement("a",{href:"#processing_data_at_scale"},"Processing Data at Scale")),m.a.createElement("li",null,m.a.createElement("a",{href:"#streaming_and_or_batching_process"},"Streaming and/or Batching Process")),m.a.createElement("li",null,m.a.createElement("a",{href:"#data_visualization"},"Data Visualization")),m.a.createElement("li",null,m.a.createElement("a",{href:"#ETL_Pipeline_Orchestration"},"ETL Pipeline Orchestration")),m.a.createElement("li",null,m.a.createElement("a",{href:"#ETL_Pipeline_Orchestration"},"ETL Pipeline Orchestration"))),m.a.createElement("h2",{id:"data_security"},"Data Security"),m.a.createElement("p",null,"You want the data only be accessed by the authorized people, you also want keep an audit log, so you know which asset being access, by whom and when."),m.a.createElement("h2",{id:"processing_data_at_scale"},"Processing Data at Scale"),m.a.createElement("p",null,"As business grows, your data may grow as well. Most likely, you will need a platform which allows you to process data at scale, for example, scanning a table of 1 billion rows of transactions and calculate the revenue generated by all the merchants. Most likely, you will need some sort of big data based processing engine, for example, Apache Spark or Snowflake. Traditional Analytical Database won't be able to fulfill this task eventually.",m.a.createElement("ul",null,"related technologies:",m.a.createElement("li",null,"Apache Spark"),m.a.createElement("li",null,"Various Cloud based Spark as service, e.g,: databricks, AWS EMR, Google Dataproc, Azure HD Insight, etc"),m.a.createElement("li",null,"Snowflake"))),m.a.createElement("h2",{id:"streaming_and_or_batching_process"},"Streaming and/or Batching Process"),m.a.createElement("p",null,"Based on the nature of your business, you may need to process some of your data in batch more while some other data processing need to be in real time (or close to real time). For example, a stock broker send trading summary to everyone at the end of day, it is a typical batching process. However, bank's ATM system might monitor all the cred card transaction and may suspend potential fraudulent transaction immediately as it discovers, the sooner you processed the data and discover the fraudulent transaction, the more loss you can prevent.",m.a.createElement("ul",null,"related technologies:",m.a.createElement("li",null,"Apache Spark"),m.a.createElement("li",null,"Apache Spark - streaming"),m.a.createElement("li",null,"Apache Flink"),m.a.createElement("li",null,"Apache Strom"))),m.a.createElement("h2",{id:"data_visualization"},"Data Visualization"),m.a.createElement("p",null,"Visualized data is easier to understand, and get vision from it. For example, looking at sotck chart is better than looking at 5-minute trading record of a stock, with the chart, you can see the trend better than looking at the table itself. People sometimes also call it BI, or Business Intelligence",m.a.createElement("ul",null,"related technologies:",m.a.createElement("li",null,"Apache Superset"),m.a.createElement("li",null,"Microsoft Power BI"),m.a.createElement("li",null,"Tableau"))),m.a.createElement("h2",{id:"ETL_Pipeline_Orchestration"},"ETL Pipeline Orchestration"),m.a.createElement("p",null,m.a.createElement("ul",null,"You need a system to orchestrate your ETL jobs, it means:",m.a.createElement("li",null,"ETL jobs has dependency, you are responsible to define the order between ETL jobs, and system follows the order you defined to execute ETL jobs."),m.a.createElement("li",null,"It provide a way so you can recover from a failed ETL job.")),m.a.createElement("ul",null,"related technologies:",m.a.createElement("li",null,"Apache Airflow"))))}}]),n}(m.a.Component);window.ContentComponent=y}]);