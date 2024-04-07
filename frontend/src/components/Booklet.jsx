import React from "react";
import HTMLFlipBook from 'react-pageflip';
import "../index.css";
import CardDef from "./Card";

const PageCover = React.forwardRef((props, ref) => {
  return (
    <div className="page page-cover" ref={ref} data-density="hard">
      <div className="page-content">
        <h2>{props.children}</h2>
      </div>
    </div>
  );
});

const Page = React.forwardRef((props, ref) => {
  return (
    <div className="page" ref={ref}>
      <div className="page-content">
        <h2 className="page-header ">{props.animal}</h2>
        <div className="page-image "> <CardDef state={props.animal} /></div>
        <div className="page-text">{props.children}</div>
        <div className="page-footer">{props.number + 1}</div>
      </div>
    </div>
  );
});

class DemoBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      totalPage: 0,
      screeHt: 1
    };
  }

  nextButtonClick = () => {
    this.flipBook.getPageFlip().flipNext();
  };

  prevButtonClick = () => {
    this.flipBook.getPageFlip().flipPrev();
  };

  onPage = (e) => {
    this.setState({
      page: e.data
    });
  };

  componentDidMount() {
    this.setState({
      totalPage: 100
    });
    this.setState({
      screeHt: window.innerHeight
    });
  }

  render() {
    return (
      <div>
        
        <HTMLFlipBook
          width={1000}
          height={1400}
          minWidth={315}
          maxWidth={1000}
          minHeight={600}
          maxHeight={1450}
          size="stretch"
          maxShadowOpacity={0.5}
          showCover={true}
          mobileScrollSupport={false}
          onFlip={this.onPage}
          onChangeOrientation={this.onChangeOrientation}
          onChangeState={this.onChangeState}
          className="html-book mt-20 h-auto"
          ref={(el) => (this.flipBook = el)}
        >
          <PageCover>THE ENCYCLOPEDIA</PageCover>
          <Page number={1} animal={"lion"}>Lorem ipsum...</Page>
          <Page number={2} animal={"Camel"}>Lorem ipsum...</Page>
          <Page number={3} animal={"tiger"}>Lorem ipsum...</Page>
          <Page number={4} animal={"Deer"}>Lorem ipsum...</Page>
          <Page number={5} animal={"elephant"}>Lorem ipsum...</Page>
          <Page number={6} animal={"squirel"}>Lorem ipsum...</Page>
          <PageCover>THE END</PageCover>
        </HTMLFlipBook>
      </div>
    );
  }
}

export default function Booklet() {
  return <DemoBook />;
}
