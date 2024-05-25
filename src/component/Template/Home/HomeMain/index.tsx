import { HomemainLayout, HomeBannerHeader } from "./styles";
import HomeBoardForm from "@organisms/HomeBoardForm";
import HomeBanner from "@molecules/HomeBanner";
import { FC } from "react";
import { HomeBoardData } from "@type/Tb";
import Button from "@atom/Button";
import MainIcon from "@atom/MainIcon";

const HomeMain: FC<HomeBoardData> = ({ BoardData, setIsActive, isActive }) => {
  return (
    <HomemainLayout>
      <HomeBannerHeader>
        <MainIcon />
        <Button
          type={"button"}
          buttontype={"icon"}
          icon="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQKSURBVHgB7Vldcts2EN4FJdudvvgI6gninCDyCeKcwPJDp+5T/GJnpq0bumk6E2c6Vp+qTh+snKDOCaqcIOoJytwgL0kUScBmQVsJAYIk+CONM/H3JIJa7H7AYrG7BLjBDb5sINTE/oOwQ6p9F0FtAYouAW3ypJv6HQG8FgAR/4wU4QjF7PngSRhBg6hMYP/wlx6A2OUZuiXEtMIxy/X/PP3hGTSA0gT2HzzqAolzXt8O1AJFCEFYl4g3gYODcPPdWushCxxAg2A36381nZ/0++FrqAAvAtrPkVr/sLItcFsxIsALBfDi69ksWhijSU+CYIuEuIVAO9nuRhGg3K5yPgoJaOOB2v86XQZpCCBPfBVfztUK+edu+m01ErkE4hVca79MG0+RJHHv76c/jqECshZFH/D16Xy7jDuJvJfa5x0r/2xjKm9XNV5Dr/JkOrvNLnmRHNcueqnTH5k7EIdJ1NHGUHDx1+lP96BB7B/9OgTbpSRtD34/HvnIZ+8ABtZKUMTRYg8axmQ656iGkTEYwLmvvJPA5SVluQ4fsKqhLg9DnlMSWLuKne+Pftv1kXcSIBD3zflo2HQKkMTVeTIuNCLV85FNEYhjPtrxXp7AsoHz0HyGbhytCpAioGRrxxjgS2qZq79ArIN1JccUWbY4kCIQCLhjTILwHFYERaYugXSrSEY4JukYf5BUOd6XRQtxZAxQcaabPsRoEtiQcmUE3nIelXzm/GqzSCZFYFGMLLCM0JmFoaXLtsUFAZ85UgR0GZh81gkdrAg9S5dtiwsOF0JD6E273YEVYWM9sOuNqEjG4ULqRfIJkbqwIiiJBgEkeFUkkw6jCo2oIwjuwoog0NTFd9CoUCY1EMyNHN33Sq+LWIdVcgq0bHEgRcB1pYMKShUZlSBbYfKRD/DYJ4XJCKPKbHUg9r49fOwu6BtAvPrCLGoE9458ZLMrsqPH/5s1AUW6lGz6YnPX3RQNTo+/8ZHPvsiksqov7EzawRk0DK6Bz9PFfRB6iud3Jb47fNRHxPuWwAV3Dvbq7kS88uvtM65cesYLpD8GT469m2e5qcT7mQyJwAirfLh2JmvByzqRSZ+n2G1s40Fnw1Z9XIB6jS3ixpYo2djS0UbAbr5RoufbM/VuLWaS0LhqLaJQ/228l+Nka1GnIrzNd/Jbi1CZhHdzVyda6+0gtM9EbbDPo8SIBJyljSsmUb69Hje8godNtNdBwt6igeVqpF0amE+i1gcO3X5JdzAKwO6GKIYuo6qQqEzgo9KrT0ygs1ZdT3NJmvzEFKfnpPiMiDHO+BNTP//AlyVRm8AyUIbEtSwpB09/HvKupfqwClQqP7q2NbGLBIfi1O1/rYv6TyQ4zOr6mMTyW5w3uMFnhg/YPcnDOIJd6AAAAABJRU5ErkJggg=="
          disabled={false}
          onClick={() => null}
        />
      </HomeBannerHeader>
      <HomeBanner isactive={isActive} onclick={() => setIsActive(!isActive)} />      
      {BoardData.map((data) => {
        return (
          <HomeBoardForm
            name={data.name}
            position={data.position}
            title={data.title}
            date={data.date}
            iscruiting={data.iscruiting}
            subtitle={data.subtitle}
            needposistion={data.needposistion}
          />
        );
      })}
    </HomemainLayout>
  );
};

export default HomeMain;
