import { Footer } from '../components';
interface FooterProps {
  toggletheme: boolean;
}
export function FooterContainer({ toggletheme = false }: FooterProps) {
  return (
    <Footer toggletheme={toggletheme}>
      <Footer.Title toggletheme={toggletheme}>
        Questions? Call{' '}
        <Footer.Link toggletheme={toggletheme}>091-XXXX-XXX-XXX</Footer.Link>
      </Footer.Title>
      <Footer.Break />
      <Footer.Row>
        <Footer.Column>
          <Footer.Link toggletheme={toggletheme} href="#">
            FAQ
          </Footer.Link>
          <Footer.Link toggletheme={toggletheme} href="#">
            Investor Relations
          </Footer.Link>
          <Footer.Link toggletheme={toggletheme} href="#">
            Privacy
          </Footer.Link>
          <Footer.Link toggletheme={toggletheme} href="#">
            Speed Test
          </Footer.Link>
        </Footer.Column>
        <Footer.Column>
          <Footer.Link toggletheme={toggletheme} href="#">
            Help Centre
          </Footer.Link>
          <Footer.Link toggletheme={toggletheme} href="#">
            Jobs
          </Footer.Link>
          <Footer.Link toggletheme={toggletheme} href="#">
            Cookie Preferences
          </Footer.Link>
          <Footer.Link toggletheme={toggletheme} href="#">
            Legal Notices
          </Footer.Link>
        </Footer.Column>
        <Footer.Column>
          <Footer.Link toggletheme={toggletheme} href="#">
            Account
          </Footer.Link>
          <Footer.Link toggletheme={toggletheme} href="#">
            Ways to Watch
          </Footer.Link>
          <Footer.Link toggletheme={toggletheme} href="#">
            Corporate Information
          </Footer.Link>
          <Footer.Link toggletheme={toggletheme} href="#">
            Only on Netflix
          </Footer.Link>
        </Footer.Column>
        <Footer.Column>
          <Footer.Link toggletheme={toggletheme} href="#">
            Media Centre
          </Footer.Link>
          <Footer.Link toggletheme={toggletheme} href="#">
            Terms of Use
          </Footer.Link>
          <Footer.Link toggletheme={toggletheme} href="#">
            Contact Us
          </Footer.Link>
        </Footer.Column>
      </Footer.Row>
      <Footer.Break />
      <Footer.Text toggletheme={toggletheme}>Netflix India</Footer.Text>
    </Footer>
  );
}
