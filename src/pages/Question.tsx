import {PageProps} from "../types.ts";
import * as s from "./Question.module.css";
import {getAnswers, QuestionName} from "./Questions.ts";

const styles = s as unknown as Record<string, string>;

type QuestionProps = PageProps & {
  question: QuestionName;
}

export const Question = (props: QuestionProps) => {

  return <div>
    <div className={styles["question"] + ' py-8 px-3'}>{props.question}</div>


    <div className={"flex flex-col gap-4"}>
      {getAnswers(props.question).map(([title, answer]) => {
        return <div key={title}
                    className={`${styles["answer"]} ${props.isAnswerSelected(answer) ? styles["selected"] : ''}`}
                    onClick={() => props.toggleAnswer(answer)}
        >
          {title}
        </div>
      })}
    </div>

    <div className={'py-8 flex justify-center'} onClick={() => {
      if (props.isQuestionAnswered(props.question)) {
        props.nextPage();
      } else {
        window.alert("Bitte wähle mindestens eine Antwort aus");
      }
    }}>
      <svg width="156" height="65" viewBox="0 0 156 65" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="39.8041" cy="32.5" rx="39.8041" ry="21.5" fill="#FFE4C5"/>
        <ellipse cx="107.135" cy="28" rx="48.1351" ry="26" fill="#FFD29E"/>
        <ellipse cx="76.831" cy="32.5" rx="60.1689" ry="32.5" fill="#ED8205"/>
        <path
          d="M52.5145 38L49.1906 27.0909H50.952L53.31 35.4432H53.4236L55.7531 27.0909H57.5429L59.8441 35.4148H59.9577L62.3156 27.0909H64.077L60.7531 38H59.1054L56.7191 29.6193H56.5486L54.1622 38H52.5145ZM70.4957 38.2273C69.4446 38.2273 68.5378 37.9953 67.7755 37.5312C67.0179 37.0625 66.4332 36.4091 66.0213 35.571C65.6141 34.7282 65.4105 33.7481 65.4105 32.6307C65.4105 31.5133 65.6141 30.5284 66.0213 29.6761C66.4332 28.8191 67.0061 28.1515 67.74 27.6733C68.4786 27.1903 69.3404 26.9489 70.3252 26.9489C70.8934 26.9489 71.4545 27.0436 72.0085 27.233C72.5625 27.4223 73.0667 27.7301 73.5213 28.1562C73.9758 28.5777 74.338 29.1364 74.6079 29.8324C74.8778 30.5284 75.0127 31.3854 75.0127 32.4034V33.1136H66.6036V31.6648H73.3082C73.3082 31.0492 73.1851 30.5 72.9389 30.017C72.6974 29.5341 72.3518 29.1529 71.9019 28.8736C71.4569 28.5942 70.9313 28.4545 70.3252 28.4545C69.6576 28.4545 69.08 28.6203 68.5923 28.9517C68.1093 29.2784 67.7376 29.7045 67.4772 30.2301C67.2168 30.7557 67.0866 31.3191 67.0866 31.9205V32.8864C67.0866 33.7102 67.2286 34.4086 67.5127 34.9815C67.8016 35.5497 68.2017 35.983 68.713 36.2812C69.2244 36.5748 69.8186 36.7216 70.4957 36.7216C70.936 36.7216 71.3338 36.66 71.6889 36.5369C72.0487 36.4091 72.3589 36.2197 72.6193 35.9688C72.8797 35.7131 73.0809 35.3958 73.223 35.017L74.8423 35.4716C74.6718 36.0208 74.3854 36.5038 73.9829 36.9205C73.5804 37.3324 73.0833 37.6544 72.4914 37.8864C71.8996 38.1136 71.2343 38.2273 70.4957 38.2273ZM77.5625 38V27.0909H79.2386V38H77.5625ZM78.4147 25.2727C78.088 25.2727 77.8063 25.1615 77.5696 24.9389C77.3375 24.7164 77.2215 24.4489 77.2215 24.1364C77.2215 23.8239 77.3375 23.5563 77.5696 23.3338C77.8063 23.1113 78.088 23 78.4147 23C78.7414 23 79.0208 23.1113 79.2528 23.3338C79.4895 23.5563 79.6079 23.8239 79.6079 24.1364C79.6079 24.4489 79.4895 24.7164 79.2528 24.9389C79.0208 25.1615 78.7414 25.2727 78.4147 25.2727ZM87.0529 27.0909V28.5114H81.3995V27.0909H87.0529ZM83.0472 24.4773H84.7233V34.875C84.7233 35.3485 84.792 35.7036 84.9293 35.9403C85.0713 36.1723 85.2513 36.3286 85.4691 36.4091C85.6916 36.4848 85.926 36.5227 86.1722 36.5227C86.3568 36.5227 86.5084 36.5133 86.6267 36.4943C86.7451 36.4706 86.8398 36.4517 86.9108 36.4375L87.2517 37.9432C87.1381 37.9858 86.9795 38.0284 86.7759 38.071C86.5723 38.1184 86.3142 38.142 86.0017 38.142C85.5282 38.142 85.0642 38.0402 84.6097 37.8366C84.1599 37.633 83.7858 37.3229 83.4875 36.9062C83.194 36.4896 83.0472 35.964 83.0472 35.3295V24.4773ZM94.0308 38.2273C92.9797 38.2273 92.073 37.9953 91.3107 37.5312C90.5531 37.0625 89.9683 36.4091 89.5564 35.571C89.1492 34.7282 88.9456 33.7481 88.9456 32.6307C88.9456 31.5133 89.1492 30.5284 89.5564 29.6761C89.9683 28.8191 90.5413 28.1515 91.2752 27.6733C92.0138 27.1903 92.8755 26.9489 93.8604 26.9489C94.4286 26.9489 94.9897 27.0436 95.5436 27.233C96.0976 27.4223 96.6019 27.7301 97.0564 28.1562C97.511 28.5777 97.8732 29.1364 98.1431 29.8324C98.4129 30.5284 98.5479 31.3854 98.5479 32.4034V33.1136H90.1388V31.6648H96.8433C96.8433 31.0492 96.7202 30.5 96.474 30.017C96.2325 29.5341 95.8869 29.1529 95.4371 28.8736C94.992 28.5942 94.4665 28.4545 93.8604 28.4545C93.1928 28.4545 92.6151 28.6203 92.1274 28.9517C91.6445 29.2784 91.2728 29.7045 91.0124 30.2301C90.752 30.7557 90.6218 31.3191 90.6218 31.9205V32.8864C90.6218 33.7102 90.7638 34.4086 91.0479 34.9815C91.3367 35.5497 91.7368 35.983 92.2482 36.2812C92.7595 36.5748 93.3538 36.7216 94.0308 36.7216C94.4712 36.7216 94.8689 36.66 95.224 36.5369C95.5839 36.4091 95.894 36.2197 96.1544 35.9688C96.4148 35.7131 96.6161 35.3958 96.7581 35.017L98.3774 35.4716C98.207 36.0208 97.9205 36.5038 97.5181 36.9205C97.1156 37.3324 96.6184 37.6544 96.0266 37.8864C95.4347 38.1136 94.7695 38.2273 94.0308 38.2273ZM101.098 38V27.0909H102.717V28.7386H102.831C103.029 28.1989 103.389 27.7609 103.91 27.4247C104.431 27.0885 105.018 26.9205 105.671 26.9205C105.795 26.9205 105.948 26.9228 106.133 26.9276C106.318 26.9323 106.457 26.9394 106.552 26.9489V28.6534C106.495 28.6392 106.365 28.6179 106.162 28.5895C105.963 28.5563 105.752 28.5398 105.529 28.5398C104.999 28.5398 104.526 28.651 104.109 28.8736C103.697 29.0914 103.37 29.3944 103.129 29.7827C102.892 30.1662 102.774 30.6042 102.774 31.0966V38H101.098Z"
          fill="#F3F3F3"/>
      </svg>
    </div>

  </div>
}