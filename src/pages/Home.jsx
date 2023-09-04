import React, { useEffect } from "react";
import CategoryBar from "../components/CategoryBar";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../features/basketSlice";
import { Box } from "@mui/material";
import Loading from "../components/Loading"
const Home = () => {
  const dispatch = useDispatch();

  const { loading } = useSelector((state) => state.basketSlice);

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          height="100vh"
        >
          <Loading/>
        </Box>
      ) : (
        <>
          <CategoryBar />
         
        </>
      )}
    </>
  );
};

export default Home;
