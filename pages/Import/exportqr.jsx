import { Grid, Row, Text, Col, Card } from "@nextui-org/react";
import { Fragment } from "react";
import { QRCode } from "react-qrcode-logo";
import logo from "../../image/logo.png";

export default function ExportQR() {
  const list = [
    {
      id: "Fge4sp41",
      name: "พลทหารสันติสุข สุขสันติ",
      url: `${process.env.NEXTAUTH_URL}/view?userid=${"Fge4sp41"}}`,
    },
    {
      id: "Fsd4ap42",
      name: "พลทหารธนพล พรหมสุข",
      url: `${process.env.NEXTAUTH_URL}/view?userid=${"Fge4sp42"}}`,
    },
  ];

  return (
    <Fragment>
      <Grid.Container gap={2}>
        <Grid xs={12}>
          <Row justify="center">
            <Text h3>QR Code</Text>
          </Row>
        </Grid>
        <Row justify="center">
          <QRCode
            value={`${process.env.NEXTAUTH_URL}/Registration`}
            size={200}
            logoImage={logo}
            logoWidth={60}
            logoHeight={60}
            logoOpacity={1}
            logoBackgroundColor="transparent"
            logoMargin={2}
            logoCornerRadius={8}
            imageSettings={{
              excavate: true,
            }}
          />
        </Row>
        <Row justify="center">
          <Text size={18}>คิวอาร์โค้ดสำหรับการลงทะเบียน</Text>
        </Row>
        <Grid xs={12}>
          <Card>
            <Grid xs={4}>
            {list.map((item) => {
              return (
                <Col>
                  <Row justify="center">
                    <QRCode
                      id={item.id}
                      value={item.url}
                      size={100}
                      logoImage={logo}
                      logoWidth={60}
                      logoHeight={60}
                      logoOpacity={1}
                      logoBackgroundColor="transparent"
                      logoMargin={2}
                      logoCornerRadius={8}
                      imageSettings={{
                        excavate: true,
                      }}
                    />
                  </Row>
                  <Row justify="center">
                    <Text size={12}>{item.name}</Text>
                  </Row>
                </Col>
              );
            })}
            </Grid>
          </Card>
        </Grid>
      </Grid.Container>
    </Fragment>
  );
}
