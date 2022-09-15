
import React from "react";
import Head from "next/head";
type ISEO = {
  title: string,
  description: string,
};
const SEO = ({title= "Björn Urban", description="This is my personal Web-based CV, showcase and Blog"}: ISEO) => {
  return (
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
  );
};




export default SEO;