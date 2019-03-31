const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const { siteConfig } = this.props;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const ProjectTitle = () => (
      <h2 className="projectTitle">
        {siteConfig.title}
        <small>{siteConfig.tagline}</small>
      </h2>
    );

    return (
      <SplashContainer>
        <div className="inner">
          <ProjectTitle siteConfig={siteConfig} />
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;

    const Block = props => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const Features = () => (
      <Block layout="fourColumn">
        {[
          {
            content: 'o que o habitica faz 1',
            //image: `${baseUrl}img/docusaurus.svg`,
            //imageAlign: 'top',
            title: 'o que o habitica faz 1',
          },
          {
            content: 'o que o habitica faz 2',
            //image: `${baseUrl}img/docusaurus.svg`,
            //imageAlign: 'top',
            title: 'o que o habitica faz 2',
          },
        ]}
      </Block>
    );

    const FeatureCallout = () => (
      <div
        className="productShowcaseSection paddingBottom"
        style={{textAlign: 'center'}}>
        <h2>Explicar o habitica</h2>
        <MarkdownBlock>These are features of this project</MarkdownBlock>
      </div>
    ); 

    const ContributorCard = ({name, img, github}) => (
      <div className="card">
        <p className="card__name">{ name }</p>
        <a href={ github }><img src={ img }/></a>
      </div>
    )

    const Contributors = () => (
      <div className="contributors-container">
        {siteConfig.contributors.map(c => <ContributorCard  key={ c.name }  name={ c.name } 
                                                            img={ c.img }   github={ c.github }/>)}
      </div>
    );

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <Features />
          <FeatureCallout />
          <Contributors /> 
        </div>
      </div>
    );
  }
}

module.exports = Index;
