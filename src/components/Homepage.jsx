import millify from "millify";
import { Typography, Row, Col, Statistic } from "antd";
import { Link } from "react-router-dom";

import { useGetCryptosQuery } from "../services/cryptoApi";
import { Cryptocurrencies, News } from ".";

const { Title } = Typography;

const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery();
  const globalStats = data?.data?.stats;
  if (isFetching) return "Loading...";
  return (
    <>
      <Title level={2} className="heading">
        Global Crypto Status
      </Title>
      <Row>
        <Col span={12}>
          <Statistic title="Total Cryptocurrencies" value={globalStats.total} />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Exchanges"
            value={globalStats.totalExchanges}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Market Cap"
            value={globalStats.totalMarketCap}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total 24h Volume"
            value={globalStats.total24Volume}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Market"
            value={globalStats.totalMarkets}
          />
        </Col>
      </Row>
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Top 10 Cryptocurrencies in the world
        </Title>
        <Title level={3} className="show-more">
          <Link to="/cryptocurrencies">Show more</Link>
        </Title>
      </div>
      <Cryptocurrencies />
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Latest Crypto News
        </Title>
        <Title level={3} className="show-more">
          <Link to="/news">Show more</Link>
        </Title>
      </div>
      <News />
    </>
  );
};

export default Homepage;
