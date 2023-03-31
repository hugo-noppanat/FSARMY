import CakeIcon from '@mui/icons-material/Cake';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import BadgeIcon from '@mui/icons-material/Badge';
import {Image, Card, Text, Row} from '@nextui-org/react'
export default function Card_Info(props){
  const{
    data,
    children,
  } = props;

  return(
    <Card >
      <Card.Body>
      <Row justify="center">
          <Image
            src={data?.avatar || "https://i.imgur.com/0y0tqQ1.png"}
            alt="Avatar"
            width={214}
            height={288}
          />
        </Row>
        <Row justify='center' >
          <Text h5>{data?.name}</Text>
        </Row>
        <Row>
          <CakeIcon className="mx-2"></CakeIcon>
          <Text p>{data.birthday ? data.birthday: "1 มกราคม 1999"}</Text>
        </Row>
        <Row>
          <PermIdentityIcon className="mx-2"></PermIdentityIcon>
          <Text p>{data?.id_card}</Text>
        </Row>
        <Row>
          <BadgeIcon className="mx-2"></BadgeIcon>
          <Text p>{data?.rta_id}</Text>
        </Row>
        <Row>
          <LocationCityIcon className="mx-2"></LocationCityIcon>
          <Text p>{data?.sub_detp} {data?.detp}</Text>
        </Row>
      </Card.Body>
    </Card>
  )
}