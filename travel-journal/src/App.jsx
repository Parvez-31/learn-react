import Entry from "./components/Entry";
import Header from "./components/Header";
import data from "./utils/data";

const App = () => {
  const allData = data.map((data) => {
    return (
      <Entry
        key={data.id}
        img={data.img}
        title={data.title}
        country={data.country}
        googleMapsLink={data.googleMapsLink}
        dates={data.dates}
        text={data.text}
      />
    );
  });
  return (
    <>
      <Header />
      {allData}
      {/* <Entry />
      <Entry /> */}
    </>
  );
};

export default App;
