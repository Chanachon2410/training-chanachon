import React from "react";
import Layout from "../components/Layout";

const Home = () => {
  return (
    <Layout>
      <h1 className="font-bold text-4xl text-blue-800 mb-5 p-5">หน้าหลัก</h1>
      <hr />
      <div><center>
      <img src="https://images.sbs.com.au/dims4/default/798f369/2147483647/strip/true/crop/1800x1013+0+95/resize/1280x720!/quality/90/?url=http%3A%2F%2Fsbs-au-brightspot.s3.amazonaws.com%2Fdrupal%2Fyourlanguage%2Fpublic%2Fpodcast_images%2Fan_empty_classroom_aap_1.jpg"
              className="w-70" />
              </center></div>
    </Layout>
  );
};

export default Home;
