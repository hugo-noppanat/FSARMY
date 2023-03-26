import React from "react";
import { useRouter } from "next/router";
import { Container, Card, Row, Text } from "@nextui-org/react";

export default function HeaderMenuBar(props) {
  const router = useRouter();
  const {
    pageName,
    selectPage = null,
    setSelectPage,
    setEditPage,
    setViewPage,
    viewPage = null,
    editPage = null,
  } = props;

  const backFunction = () => {
    if (
      selectPage.length !== 0 &&
      typeof editPage == "boolean" &&
      typeof viewPage == "boolean"
    ) {
      console.log("selectPage", selectPage);
      setSelectPage([]);
      setEditPage(false);
      setViewPage(false);
    } else if (typeof editPage !== "boolean" || typeof viewPage !== "boolean") {
      console.log("selectPages", selectPage);
      setEditPage(false);
      setViewPage(false);
    } else {
      router.back();
    }
  };

  return (
    <div className="navbar" style={{ backgroundColor: "#84CDF8", padding: 0 }}>
      <div className="container-fluid">
        {selectPage !== null && viewPage !== null && editPage !== null ? (
          <span className="navbar-brand btn">
            <i
              className="bi-arrow-left-circle-fill d-inline-block icon-bar mx-4"
              style={{ width: "auto" }}
              onClick={backFunction}
            />
            <h4 className="d-inline-block mx-2 ">{pageName}</h4>
          </span>
        ) : (
          <span className="navbar-brand btn mt-2">
            <h4 className="d-inline-block mx-2 ">{pageName}</h4>
          </span>
        )}
      </div>
    </div>
  );
}
