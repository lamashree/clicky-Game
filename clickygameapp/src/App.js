import React from "react";
import Navbar from "./Components/Navbar"
import PictureCard from "./Components/PictureCard"
import Wraper from "./Components/Wrapper"
import Images from "./Images"

class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <Wraper />
        <PictureCard />
      </>



    )
  }
}
export default App;




