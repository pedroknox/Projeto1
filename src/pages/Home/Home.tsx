import Button from "../../components/Button/Button";
import {
  ContainerDiv,
  PrimeiraDiv,
  CardDiv,
  TextoDiv1,
  FotoDiv,
  SegundaDiv,
  SobreMimDiv,
  CardDiv2,
  TextoDiv2,
  BotaoDiv2,
  TerceiraDiv,
  TextoDiv3,
} from "./style";
import { useHome } from "./useHome";

const Home = () => {
  const { url, setUrl, downloadVideo, videos } = useHome();
  return (
    <div>
      <ContainerDiv>
        <PrimeiraDiv>
          <CardDiv>
            <TextoDiv1>
              <input
                type="text"
                onChange={(e) => setUrl(e.currentTarget.value)}
              />
            </TextoDiv1>
            {videos.map((v, i) => (
              <div
                key={`videos_${i}`}
                style={{ display: "flex", flexDirection: "row", gap: `20px` }}
              >
                <p>{v.width}</p>
                <p>{v.fps}</p>
                <p>{v.mimeType}</p>
                <a href={v.url} download="video">
                  download
                </a>
              </div>
            ))}
            <Button
              variant="primary"
              text="SOBRE MIM"
              onClick={() => {
                downloadVideo();
              }}
            ></Button>
          </CardDiv>
        </PrimeiraDiv>
      </ContainerDiv>
    </div>
  );
};

export default Home;
