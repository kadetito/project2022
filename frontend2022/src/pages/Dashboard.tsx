import React, { useEffect } from "react";

import { ContentLayout } from "../layout/ContentLayout";
import { useContentStore } from "../hooks";

import Loader from "../components/ui/Loader";
import Canvas from "../components/datacomponent/Canvas";
import SearchFilter from "../components/datacomponent/SearchFilter";

export const Dashboard = () => {
  const { events, startLoadingEvents, loader } = useContentStore();

  useEffect(() => {
    startLoadingEvents();
  }, []);

  return (
    <>
      {loader ? <Loader /> : null}

      <ContentLayout className="mun__dashboard">
        <SearchFilter />
        <Canvas events={events} />
      </ContentLayout>
    </>
  );
};
