import {
  LoadingBall,
  LoadingContainer,
  LoadingWrapper,
} from "./Loading.styled";

const Loading = () => {
  return (
    <>
      <LoadingWrapper>
        <LoadingContainer>
          <LoadingBall />
        </LoadingContainer>
      </LoadingWrapper>
    </>
  );
};

export default Loading;
