import {
  SignUpSchoolSettingNameLayout,
  SignUpSchoolSettingText,
  SignUpSchoolSettingLabelForm,
  SignUpSchoolSettingLabel,
} from "./styles";
import Heading from "@atom/Heading";
import Button from "@atom/Button";
import Input from "@atom/Input";
import Text from "@atom/Text";

const SignUpSchoolSettingName = () => {
  return (
    <SignUpSchoolSettingNameLayout>
      <Button
        type="button"
        buttontype="icon"
        icon="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAL+SURBVHgB1ds9bhpBGMbx2R2oQ27gdOlCmQZEOAE3MDlBki4SgiwS1DEnsCnTOVVKE2hScgQfwWUKFvI+1k60Iewy38z8JYtlmcX8hA07g0gYNZlMPhwOh4x+WnT1vtFofMqy7JFFHD3+q91ud0ubvSRJHsl2N5vNpsl4PB7SldvyYAzgnL+LFQ1snucP5Loq7yfX+5R2Xh8fgIE4AAeyyKrCov1+P0hJ/XTqwBjRdVhE1hcpXf6suoOY0OewiMBLvl6vf3W73YSu9yrGtehOBv1+//tqtXpiASaDpab0onXDsUXoVaxoBWyGDS72xIhWxSJeviUmtA4W8eMRMaB1sYifGhky2gSLeNURIaJNsYizmkJC28CiWjAKAW0Li86C0SXRNrFICowugbaNRdJg5BPtAouUwMgH2hUWKYNRgX5Jm28rhrRo7tkj9DdC/2YKEbZFKxU/aPN1zbAFYT8zjRJm0Gg0uqMp13XNkC0tF2HlROqZLrAPtNmuGkPP+nI+nw+ZZkZgZAvtA4uMwcgU7QuLrICRLtonFlkDI1W0byyyCkayaGz4xiLrYCSDLi69YpETMJJAV+YKi7ROPGTabDb3nU7nFaHbKse5xCJnYKSKdo1FTsFIFu0Di1LmOLz1EPbNuXEYg7HMcc5etJDM++xRSufeOjkDa2BFTtFOwAZYkTO0dbDs6eLzL7c4tZTNKlj13Nj2fFoma2DdiYBvtBWw6azHJ9oYbGuK5wttBLY9n/WB1ga7mry7RmuBXa9UuEQrg30ty7hCK4F9r0G5QEuDL7HghmyjpcCXwopsos+CL40V2ULXgkPBimygK8GhYUWm6JPgULEiE/R/4NCxIl30P+BYsCId9N9VS8llmW2z2fzIAql4LNuaIW2Yyquhz8+wLNb1iqJOqo89iRkrUjGkeZ5/ZRFjER5b8RFs7Z83Wb/gf3hQMyh4rEgGTS+4w7qPWqLBimTQ+N7S4sT+6LCiM+hlSjfe0MYC318qvsO0iBUrKqGXJdeU9mV/ADGP6Rez7tiMAAAAAElFTkSuQmCC"
        disabled={false}
        onClick={() => null}
      />
      <SignUpSchoolSettingText>
        <Heading fontSize="24px" fontWeight="600" color="rgba(0,0,0,1)">
          팀원 모집을
        </Heading>
        <Heading fontSize="24px" fontWeight="600" color="rgba(0,0,0,1)">
          시작해 볼까요?
        </Heading>
      </SignUpSchoolSettingText>
      <SignUpSchoolSettingLabelForm>
        <SignUpSchoolSettingLabel>
          <label htmlFor="name">
            <Text fontSize="15px" fontWeight="500" color="rgba(99, 99, 99, 1)">
              먼저 닉네임이 필요해요 :)
            </Text>
          </label>
          <Input
            placeholder={"홍길동"}
            readonly={false}
            disabled={false}
            value={""}
            error={""}
            id="name"
            type={"text"}
            inputtype={"text"}
          />
        </SignUpSchoolSettingLabel>

        <Button
          content="계속하기"
          type="button"
          buttontype="largebutton"
          disabled={false}
          onClick={() => null}
        />
      </SignUpSchoolSettingLabelForm>
    </SignUpSchoolSettingNameLayout>
  );
};

export default SignUpSchoolSettingName;
