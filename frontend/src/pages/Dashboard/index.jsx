import styled from "styled-components";
import Input from "../../components/Input";

const DashboardContent = styled.div`
  display: grid;
  grid-template-columns: 10rem calc(100vw - 10rem);
`;

const SideBar = styled.nav`
  height: 100vh;
  width: 100%;
  background-color: #1d1c1d;
  color: #fff;
  padding: 1rem;
  display: grid;
  gap: 0.5rem;
  place-content: start;
  border-right: 1px solid #888;
`;

const CurrentChannel = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #1d1c1d;
  display: grid;
  grid-template-rows: 10% 80% 10%;
`;

const ChannelTitle = styled.h1`
  border-bottom: 1px solid #888;
  margin: 0;
  display: flex;
  align-items: center;
  padding: 0 2rem;
  color: #fff;
`;

const CurrentMessages = styled.div`
  overflow-y: scroll;
  padding: 1rem;
  color: #fff;
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-track {
    background: #1d1c1d;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 15px;
  }
`;

const Keyboard = styled.form`
  border-top: 1px solid #888;
  padding: 1rem;
  display: grid;
  grid-template-columns: 90% 10%;
`;

const Dashboard = () => {
  return (
    <DashboardContent>
      <SideBar>
        <div>Channel #1</div>
        <div>Channel #2</div>
        <div>Channel #3</div>
        <div>Channel #4</div>
        <div>Channel #5</div>
        <div>Channel #6</div>
      </SideBar>
      <CurrentChannel>
        <ChannelTitle>Channel #1</ChannelTitle>
        <CurrentMessages>
          <div>
            <h2>Name Surname</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quia
              inventore ex sint ipsam? Non eligendi earum perspiciatis totam
              dolorum? Hic sunt dolore tempora natus corporis impedit ipsum,
              saepe porro.
            </p>
          </div>
          <div>
            <h2>Name Surname</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quia
              inventore ex sint ipsam? Non eligendi earum perspiciatis totam
              dolorum? Hic sunt dolore tempora natus corporis impedit ipsum,
              saepe porro.
            </p>
          </div>
          <div>
            <h2>Name Surname</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quia
              inventore ex sint ipsam? Non eligendi earum perspiciatis totam
              dolorum? Hic sunt dolore tempora natus corporis impedit ipsum,
              saepe porro.
            </p>
          </div>
          <div>
            <h2>Name Surname</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quia
              inventore ex sint ipsam? Non eligendi earum perspiciatis totam
              dolorum? Hic sunt dolore tempora natus corporis impedit ipsum,
              saepe porro.
            </p>
          </div>
          <div>
            <h2>Name Surname</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quia
              inventore ex sint ipsam? Non eligendi earum perspiciatis totam
              dolorum? Hic sunt dolore tempora natus corporis impedit ipsum,
              saepe porro.
            </p>
          </div>
          <div>
            <h2>Name Surname</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quia
              inventore ex sint ipsam? Non eligendi earum perspiciatis totam
              dolorum? Hic sunt dolore tempora natus corporis impedit ipsum,
              saepe porro.
            </p>
          </div>
          <div>
            <h2>Name Surname</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quia
              inventore ex sint ipsam? Non eligendi earum perspiciatis totam
              dolorum? Hic sunt dolore tempora natus corporis impedit ipsum,
              saepe porro.
            </p>
          </div>
          <div>
            <h2>Name Surname</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quia
              inventore ex sint ipsam? Non eligendi earum perspiciatis totam
              dolorum? Hic sunt dolore tempora natus corporis impedit ipsum,
              saepe porro.
            </p>
          </div>
          <div>
            <h2>Name Surname</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quia
              inventore ex sint ipsam? Non eligendi earum perspiciatis totam
              dolorum? Hic sunt dolore tempora natus corporis impedit ipsum,
              saepe porro.
            </p>
          </div>
          <div>
            <h2>Name Surname</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quia
              inventore ex sint ipsam? Non eligendi earum perspiciatis totam
              dolorum? Hic sunt dolore tempora natus corporis impedit ipsum,
              saepe porro.
            </p>
          </div>
          <div>
            <h2>Name Surname</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quia
              inventore ex sint ipsam? Non eligendi earum perspiciatis totam
              dolorum? Hic sunt dolore tempora natus corporis impedit ipsum,
              saepe porro.
            </p>
          </div>
          <div>
            <h2>Name Surname</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quia
              inventore ex sint ipsam? Non eligendi earum perspiciatis totam
              dolorum? Hic sunt dolore tempora natus corporis impedit ipsum,
              saepe porro.
            </p>
          </div>

        </CurrentMessages>
        <Keyboard>
          <Input type="text" />
          <Input type="submit" value="Send" />
        </Keyboard>
      </CurrentChannel>
    </DashboardContent>
  );
};

export default Dashboard;
