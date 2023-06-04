import Card from "../../../components/Card";

const CardPhoto = ({ data }) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.map((data, idx) => (
        <Card
          key={idx}
          body={data.caption}
          category={data.category}
          date={data.date}
          img={data.image}
          id={data.id}
        />
      ))}
    </div>
  );
};

export default CardPhoto;
