'use client'
import { useEffect } from "react";

const PageTitle = ({ title }) => {
  useEffect(() => {
    document.title = `RM | ${title}`;

    return () => {
      document.title = "RM | blog title";
    };
  }, [title]);

  return null;
};

export default PageTitle;
