import { Jumbotron } from '../components';
import jumboData from '../fixtures/jumbo.json';
interface jumboType {
  id: number;
  title: string;
  subTitle: string;
  image: string;
  alt: string;
  direction: string;
}
export function JumbotronContainer() {
  return (
    <Jumbotron.Container>
      {jumboData.map((item: jumboType) => (
        <Jumbotron key={item.id} direction={item.direction}>
          <Jumbotron.Pane>
            <Jumbotron.Title>{item.title}</Jumbotron.Title>
            <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
          </Jumbotron.Pane>
          <Jumbotron.ImagePane>
            <Jumbotron.Image src={item.image} alt={item.alt}></Jumbotron.Image>
          </Jumbotron.ImagePane>
        </Jumbotron>
      ))}
    </Jumbotron.Container>
  );
}
