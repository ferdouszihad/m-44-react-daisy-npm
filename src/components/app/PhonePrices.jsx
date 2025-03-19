import { useEffect, useState } from "react";
import Title from "../shared/Title";
import axios from "axios";
import { BarChart, Bar, ResponsiveContainer, Tooltip, XAxis } from "recharts";

const PhonePrices = () => {
  const [phonePrices, setPhonePrices] = useState([]);
  //   useEffect(() => {
  //     fetch("/phonePrices.json")
  //       .then((res) => res.json())
  //       .then((data) => setPhonePrices(data));
  //   });
  console.log(phonePrices);

  useEffect(() => {
    axios
      .get("https://openapi.programming-hero.com/api/phones?search=samsung")

      .then((data) => {
        const phoneData = data.data.data;
        // console.log(phoneData);
        const myRefractorData = phoneData.map((phone) => {
          return {
            name: phone.phone_name,
            price: parseInt(phone.slug.split("-")[1]),
          };
        });
        setPhonePrices(myRefractorData);
      });
  }, []);
  return (
    <div className="my-10">
      <Title>Phone Price Chart</Title>
      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <BarChart data={phonePrices}>
            <XAxis dataKey="name" />
            <Tooltip />
            <Bar width={"30px"} dataKey="price" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PhonePrices;
