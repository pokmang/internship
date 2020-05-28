import React, { PureComponent,useEffect, useState } from "react";
import { Statistic, Col, Button } from "antd";
import { Line as LineA } from "react-chartjs-2";
import {
  ArrowUpOutlined,
  ArrowDownOutlined,
  CaretUpOutlined,
} from "@ant-design/icons";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Sector,
  PieChart,
  Pie,
  Cell,
  RadialBarChart,
  RadialBar,
  Legend,
} from "recharts";
import car1 from "../../assets/img/card/car1.png";
import delivery1 from "../../assets/img/card/delivery1.png";
import parking1 from "../../assets/img/card/parking1.png";
import vip1 from "../../assets/img/card/vip1.png";
import car2 from "../../assets/img/card/car2.png";
import delivery2 from "../../assets/img/card/delivery2.png";
import parking2 from "../../assets/img/card/parking2.png";
import vip2 from "../../assets/img/card/vip2.png";
import price from "../../assets/img/icon/price.png";
import car from "../../assets/img/icon/car.png";
import parking from "../../assets/img/icon/parking.png";
import { Card, CardBody, Row, CardColumns } from "reactstrap";
import { CustomTooltips } from "@coreui/coreui-plugin-chartjs-custom-tooltips";
import "./card.css";
import "./chart.css";
import axios from 'axios'
var moment = require("moment"); // require
const time = moment().format("DD MMMM YYYY");
//statisce
const data1 = [
  { name: "A", number: 1, time: 10.1 },
  { name: "B", number: 1.2, time: 10.3 },
  { name: "C", number: 1.3, time: 10.6 },
  { name: "D", number: 3, time: 10.5 },
];

//realtime
const data2 = [
  { name: "Group A", value: 45 },
  { name: "Group B", value: 300 },
];

const data3 = [
  {
    name: "car",
    uv: 31.47,
    pv: 2400,
    fill: "#8884d8",
  },
  {
    name: "Car parking",
    uv: 26.69,
    pv: 4567,
    fill: "#83a6ed",
  },
  {
    name: "Car VIP",
    uv: 15.69,
    pv: 1398,
    fill: "#8dd1e1",
  },
];
const style = {
  top: 0,
  left: 350,
  lineHeight: "24px",
};

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const data4 = {
  labels: ["10.00", "10.30", "11.30", "12.00", "12.02", "12.20"],
  datasets: [
    {
      label: "Incoming",
      data: [33, 53, 85, 41, 44, 65],
      fill: true,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)",
    },
    {
      label: "Outgoing",
      data: [33, 25, 35, 51, 54, 76],
      fill: false,
      borderColor: "#742774",
    },
  ],
};

const Dashboard = () => {
  const [dashboard , setDashboard] = useState({})
  const [realtime , setRealtime] = useState([])
  const [data , setData] = useState([])

  useEffect(()=>{
    getDashboard()
  },[])


  const getDashboard = async ()=>{
    let dashboard = await axios.get('http://localhost:3000/dashboard/getDashboard')
    setDashboard(dashboard.data)
    let realtime = await axios.get('http://localhost:3000/dashboard/getRealtime')
    setRealtime(realtime.data)
    let data = await axios.get('http://localhost:3000/dashboard/getData')
    setData(data.data)
  }
  console.log("d",dashboard);
  console.log("r",realtime);
  console.log("dd",data);
  




  // const renderRealtime = () =>{
   
   
  //  return realtime.map((v)=>{
      
  //     return (
  //       <div>
  //         <Row>
  //           <Col>{v.id}</Col>
  //           <Col>{v.numberOfcars}</Col>
  //           <Col>{v.time}</Col>
  //         </Row>   
  //       </div>
  //     )
  //   })
  // }
  return (
    <div className="animated fadeIn">
      {/* //การ์ด */}
      <Row>
        <Col xs="12" sm="6" lg="2" md="6" xl="4">
          <Card className="text-white bg-info" id="card">
            <img src={car2} className="absolute" />
            <CardBody className="pb-0">
              <img src={car1} className="logo1" />

              <span className="textcard1">Number of cars</span>
            </CardBody>
            <div className="chart-wrapper mx-3" style={{ height: "70px" }}>
              <h4 className="number">{dashboard.totalCars}</h4>
            </div>
          </Card>
        </Col>

        <Col xs="12" sm="6" lg="6" md="6" xl="4">
          <Card className="text-white bg-primary" id="card">
            <img src={parking2} className="absolute" />
            <CardBody className="pb-0">
              <img src={parking1} className="logo2" />
              <span className="textcard2">Car Parking</span>
            </CardBody>
            <div className="chart-wrapper mx-3" style={{ height: "70px" }}>
  <h4 className="number">{dashboard.carParking}</h4>
            </div>
          </Card>
        </Col>

        <Col xs="12" sm="6" lg="6" md="6" xl="4">
          <Card className="text-white bg-warning" id="card">
            <img src={delivery2} className="absolute" />
            <CardBody className="pb-0">
              <img src={delivery1} className="logo3" />
              <span className="textcard3">Delivery Parking</span>
            </CardBody>
            <div className="chart-wrapper mx-3" style={{ height: "70px" }}>
              <h4 className="number">{dashboard.deliveryParking}</h4>
            </div>
          </Card>
        </Col>

        <Col xs="12" sm="6" lg="6" md="6" xl="4">
          <Card className="text-white bg-danger" id="card">
            <img src={vip2} className="absolute" />
            <CardBody className="pb-0">
              <img src={vip1} className="logo4" />

              <span className="textcard4">Car VIP</span>
            </CardBody>
            <div className="chart-wrapper mx-3" style={{ height: "70px" }}>
              <h4 className="number">{dashboard.carVIP}</h4>
            </div>
          </Card>
        </Col>
      </Row>

      {/* กราฟ */}
      <Row>
        <Col>
          <Row>
            <Card id="chrat1">
              <CardBody className="pb-0">
                <h4>Statiscs</h4>
                <Statistic value={data.length} className="satistic" />
                <div className="price">
                  <img src={price} className="price" />
                  <spen  >{data1[1].number}</spen>
                  <spen>({data1[2].number})</spen>
                </div>
                <LineChart width={900} height={200} data={data1}>
                  <Line dataKey="number" stroke="#8884d8" />
                  <CartesianGrid stroke="#ccc" />
                  {/* <XAxis dataKey="time" />
                    <YAxis dataKey="number" /> */}
                </LineChart>
              </CardBody>
            </Card>
          </Row>
          <Row>
            <Col>
              <Card className="chart4">
                <CardBody className="pb-0">
                  <div>
                    <RadialBarChart
                      width={500}
                      height={300}
                      cx={140}
                      cy={70}
                      innerRadius={20}
                      outerRadius={70}
                      barSize={10}
                      data={data3}
                    >
                      <RadialBar
                        minAngle={15}
                        label={{ position: "insideStart", fill: "#fff" }}
                        background
                        clockWise
                        dataKey="uv"
                      />
                      <Legend
                        iconSize={10}
                        width={120}
                        height={140}
                        layout="vertical"
                        verticalAlign="middle"
                        wrapperStyle={style}
                      />
                    </RadialBarChart>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col>
              <Card className="chart4">
                <CardBody className="pb-0">
                  <div className="chartline">
                    <LineA data={data4} width={400} />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Col>
        <Col>
          <Card id="chrat2">
            <CardBody className="pb-0">
              <h5>Real time</h5>
              <small>{time}</small>
              <div className="move">
                <spen>Movement</spen>
                <div>
                  <img src={car} className="rtcar" />
                  <spen id="car">{data2[0].value}</spen>
                </div>
                <div>
                  <img src={parking} className="rtpark" />
                  <spen id="car">{data2[1].value}</spen>
                </div>
              </div>
              {/* {renderRealtime()} */}
              <PieChart width={700} height={900}>
                <Pie
                  data={data2}
                  cx={120}
                  cy={200}
                  innerRadius={60}
                  outerRadius={70}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
              </PieChart>
             
            </CardBody>
            
          </Card>
          
        </Col>
      </Row>
     
    </div>
  );
};

export default Dashboard;
