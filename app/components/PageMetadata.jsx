'use client'
import { useEffect } from "react";

const PageMetadata = ({ description = "", keywords = "" }) => {
  useEffect(() => {
    const metaDescription = document.querySelector('meta[name="description"]');
    const metaKeywords = document.querySelector('meta[name="keywords"]');

    if (metaDescription) {
      metaDescription.content = description;
    }

    if (metaKeywords) {
      metaKeywords.content = keywords;
    }

    return () => {
      // Reset metadata on component unmount if needed
      if (metaDescription) {
        metaDescription.content = "";
      }

      if (metaKeywords) {
        metaKeywords.content = "";
      }
    };
  }, [description, keywords]);

  return null;
};

export default PageMetadata;
