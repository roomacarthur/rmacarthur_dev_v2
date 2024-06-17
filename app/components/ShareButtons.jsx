"use client";
import React from "react";
import {
  FacebookShareButton,
  LinkedinShareButton,
  RedditShareButton,
  FacebookIcon,
  XIcon,
  LinkedinIcon,
  RedditIcon,
  TwitterShareButton,
} from "react-share";

const ShareButtons = ({ shareUrl, title }) => {
  return (
    <div className="flex space-x-2">
      <FacebookShareButton url={shareUrl} quote={title}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <TwitterShareButton url={shareUrl} title={title}>
        <XIcon size={32} round />
      </TwitterShareButton>
      <LinkedinShareButton url={shareUrl} summary={title}>
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>
      <RedditShareButton url={shareUrl} title={title}>
        <RedditIcon size={32} round />
      </RedditShareButton>
    </div>
  );
};

export default ShareButtons;
