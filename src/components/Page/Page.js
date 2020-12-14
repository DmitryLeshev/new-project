import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import useRouter from "@assets/utils/useRouter";
import { CustomScrollbars } from "@components";

const NODE_ENV = process.env.NODE_ENV;
const GA_MEASUREMENT_ID = process.env.REACT_APP_GA_MEASUREMENT_ID;

const Page = (props) => {
  const { title, children, className, scroll } = props;
  const router = useRouter();

  useEffect(() => {
    if (NODE_ENV !== "production") {
      return;
    }

    if (window.gtag) {
      window.gtag("config", GA_MEASUREMENT_ID, {
        page_path: router.location.pathname,
        page_name: title,
      });
    }
  }, [title, router]);

  const page = (
    <div className={className}>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {children}
    </div>
  );

  return (
    <React.Fragment>
      {scroll ? (
        <CustomScrollbars style={{ width: "100%" }}>{page}</CustomScrollbars>
      ) : (
        page
      )}
    </React.Fragment>
  );
};

export default Page;
