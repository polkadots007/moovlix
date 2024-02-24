import { Footer } from '../components';
interface FooterProps {
  toggled: boolean;
}
export function FooterContainer({ toggled = false }: FooterProps) {
  return (
    <Footer toggled={toggled}>
      <Footer.Title toggled={toggled}>
        Questions? Call{' '}
        <Footer.Link toggled={toggled}>091-XXXX-XXX-XXX</Footer.Link>
      </Footer.Title>
      <Footer.Break />
      <Footer.Row>
        <Footer.Column>
          <Footer.Link toggled={toggled} href="#">
            FAQ
          </Footer.Link>
          <Footer.Link toggled={toggled} href="#">
            Investor Relations
          </Footer.Link>
          <Footer.Link toggled={toggled} href="#">
            Privacy
          </Footer.Link>
          <Footer.Link toggled={toggled} href="#">
            Speed Test
          </Footer.Link>
        </Footer.Column>
        <Footer.Column>
          <Footer.Link toggled={toggled} href="#">
            Help Centre
          </Footer.Link>
          <Footer.Link toggled={toggled} href="#">
            Jobs
          </Footer.Link>
          <Footer.Link toggled={toggled} href="#">
            Cookie Preferences
          </Footer.Link>
          <Footer.Link toggled={toggled} href="#">
            Legal Notices
          </Footer.Link>
        </Footer.Column>
        <Footer.Column>
          <Footer.Link toggled={toggled} href="#">
            Account
          </Footer.Link>
          <Footer.Link toggled={toggled} href="#">
            Ways to Watch
          </Footer.Link>
          <Footer.Link toggled={toggled} href="#">
            Corporate Information
          </Footer.Link>
          <Footer.Link toggled={toggled} href="#">
            Only on Netflix
          </Footer.Link>
        </Footer.Column>
        <Footer.Column>
          <Footer.Link toggled={toggled} href="#">
            Media Centre
          </Footer.Link>
          <Footer.Link toggled={toggled} href="#">
            Terms of Use
          </Footer.Link>
          <Footer.Link toggled={toggled} href="#">
            Contact Us
          </Footer.Link>
        </Footer.Column>
      </Footer.Row>
      <Footer.Break />
      <Footer.Text toggled={toggled}>Netflix India</Footer.Text>
    </Footer>
  );
}
