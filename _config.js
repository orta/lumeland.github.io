// import lume from "https://deno.land/x/lume/mod.js";
import lume from "../lume/mod.js";

const site = lume();

site.ignore("README.md");
site.copy("styles.css");
site.copy("logo.svg");
site.copy("favicon.ico");
site.copy("favicon-32x32.png");

export default site;
