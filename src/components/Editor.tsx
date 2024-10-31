import { useEffect, useState } from "react";
import Header from "../Header/Header";
import { BuilderComponent, builder } from "@builder.io/react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router";

// Builder Public API Key set in .env file
builder.init(import.meta.env.VITE_PUBLIC_BUILDER_KEY!);

const Editor = () => {
  const [announcement, setAnnouncement] = useState(null);

  useEffect(() => {
    builder
      .get("figma-imports", {
        userAttributes: {
          // To allow targeting different announcements at different pages (URLs)
          urlPath: window.location.pathname,
        },
      })
      .toPromise()
      .then((announcementBar) => setAnnouncement(announcementBar));
  }, []);
  const navigate = useNavigate();
  return (
    <>
  

      <BuilderComponent model="figma-imports" content={announcement} />
      {/* <Header /> */}
    </>
  );
};

export default Editor;
