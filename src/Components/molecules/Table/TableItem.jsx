/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useId } from "react";
import "./Table.scss";
import {
  convertTimeStamp,
  stringShortener,
} from "../../../lib/helpers/helpers";
import Date from "../../atoms/TableISIngletem/Date";
import Video from "../../atoms/TableISIngletem/Video";
import Creator from "../../atoms/TableISIngletem/Creator";
import Platform from "../../atoms/TableISIngletem/Platform";
import NumericalViews from "../../atoms/TableISIngletem/NumericalViews";
import Button from "../../atoms/Button";
import SingleItem from "./SingleItem";
import Modal from "../../atoms/Modal/Modal";
export default function TableItem({ data }) {
  const [openModal,setOpenModal] = useState(false)
  console.log("data - ", data);
  const { content, creator } = data;
  const {
    timestamp,
    external_url,
    comments,
    creator_active_content_count,
    title,
  } = content;

  const { username, profile_picture_url, followers, id } = creator;
  const [dataItem, setDataItem] = useState({
    date: timestamp,
    video: title,
    creator: username,
    platform: null,
    total_views: null,
    total_engagement: null,
    engagement_rate: null,
    actions: null,
    id: null,
    link: external_url,
    creator_img: profile_picture_url,
  });


const viewModal = () => {
  // alert("viewed");
  setOpenModal(true)
}
  return (
    <>
    {
      openModal && <Modal openModal={openModal} closeModal={setOpenModal} />
    }
      <div className="table-row">
        <SingleItem>
          <Date data={dataItem.date} />
        </SingleItem>

        <SingleItem>
          <Video data={dataItem.video} link={dataItem.external_url} />
        </SingleItem>

        <SingleItem>
          <Creator
            data={stringShortener(dataItem.creator)}
            img={dataItem.creator_img}
          />
        </SingleItem>

        <SingleItem>
          <NumericalViews />
        </SingleItem>

        <SingleItem>
          <NumericalViews />
        </SingleItem>

        <SingleItem>
          <NumericalViews />
        </SingleItem>

        <SingleItem >
          <Button className="table-btn" onClick={viewModal}>View Post</Button>
        </SingleItem>


      </div>
    </>
  );
}
