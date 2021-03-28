import React from "react";
import { SectionTitle } from "../../components/SectionTitle";
import { MainPageContainer } from "../../components/MainPageContainer";
import styled from "styled-components";

//  (afaik) we cannot add styles directly to this map .....so i added an id named as frame...so tht we can acess it directly
const iframe = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d984973.5625966917!2d73.4504243602072!3d15.346509716987173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfba106336b741%3A0xeaf887ff62f34092!2sGoa!5e0!3m2!1sen!2sin!4v1616913138540!5m2!1sen!2sin" style="border:0;" allowfullscreen="" loading="lazy" id="frame"></iframe>`;

function Iframe(props) {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: props.iframe ? props.iframe : "" }}
    />
  );
}

// const Holder = styled.div``;
const MapContainer = styled.div`
  #frame {
    border-radius: 10px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 30px;
    height: 400px;
    width: 1100px;
  }
  @media (max-width: 992px) {
    #frame {
      padding: 20px;
      width: 970px;
    }
  }
  @media (max-width: 769px) {
    #frame {
      padding: 20px;
      width: 746px;
    }
  }
  @media (max-width: 586px) {
    #frame {
      padding: 20px;
      width: 566px;
    }
  }
  @media (max-width: 426px) {
    #frame {
      padding: 20px;
      width: 406px;
    }
  }
  @media (max-width: 321px) {
    #frame {
      padding: 20px;
      width: 290px;
    }
  }
  @media (max-width: 250px) {
    #frame {
      padding: 10px;
      width: 240px;
    }
  }
`;

function Contact() {
  return (
    <>
      <div>
        <MainPageContainer name="ContactUS">
          <SectionTitle>Contact Us</SectionTitle>
          <MapContainer>
            <Iframe iframe={iframe} />
          </MapContainer>
        </MainPageContainer>
      </div>
    </>
  );
}

export default Contact;
