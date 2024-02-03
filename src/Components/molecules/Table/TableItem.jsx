/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState,useId } from "react";
import "./Table.scss";
import { convertTimeStamp } from "../../../lib/helpers/helpers";
import Date from "../../atoms/TableISIngletem/Date";
import Video from "../../atoms/TableISIngletem/Video";
import Creator from "../../atoms/TableISIngletem/Creator";
import Platform from "../../atoms/TableISIngletem/Platform";
import NumericalViews from "../../atoms/TableISIngletem/NumericalViews";
import Button from "../../atoms/Button";
export default function TableItem({ data }) {
   
  console.log("data - ", data);
  const { content, creator } = data;
  const {
    timestamp,
    external_url,
    comments,
    creator_active_content_count,
    title
  } = content;

  const {username,profile_picture_url,followers,id}=creator;
  const [dataItem, setDataItem] = useState({
    date: timestamp,
    video: title,
    creator: null,
    platform: null,
    total_views: null,
    total_engagement: null,
    engagement_rate: null,
    actions: null,
    id:null,
    link:external_url
});

  return (
    <>
        <div className="table-row">
             <Date data={dataItem.date}/>
             <Video data={dataItem.video} link={dataItem.external_url} />
             <Creator/>
             <Platform/>
             <NumericalViews/>
             <NumericalViews/>
             <NumericalViews/>
             <Button variant="primary">
                View Post
             </Button>
        </div>
    </>
   )
}
