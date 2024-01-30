import Navbar from "./components/navbar/navbar"
import Hero from "./components/hero/hero"
import { useEffect, useState } from "react";
import { topAlbums } from "./api/api";
import Card from "./components/card/card";
import Section from "./components/section/section";

function App() {
  const [topAlbumsData,setTopAlbumsData] = useState([])
 
  const generateTopAlbums = async () => {
    try {
      let data = await topAlbums();
      setTopAlbumsData(data)
    } catch (err) { 
      console.error(err)
    }
  }
 
  useEffect(()=>{
    generateTopAlbums()
  },[])

  return (
    <div>
      <Navbar />
        <Hero />
      {/* {
        topAlbumsData.map((topAlbum)=>(
         <Card data={topAlbum} type="album" key={topAlbum.id}/>
        ))
      } */}
     <Section data={topAlbumsData} title="Top Albums" type="album"/>
    </div>
  );
}

export default App;
