import React from 'react'
import Div from "@elements/div";
import Text from "@elements/text";
import {AnimatePresence, motion} from "motion/react";
import RadioButton from "@elements/radio-button";
import Checkbox from "@elements/checkbox";

const QuestionCard = ({choices, question, type, key} : {choices: Array<any>, question: string, type: string, key: string}) => {

  return (
    <Div className={'w-full'}>
      <AnimatePresence mode={"wait"}>
        <motion.div
          key={key}
          className='flex mt-10 flex-col w-full'
          exit={{translateX: -300, opacity: 0, transition: {duration: 0.6}}}
          initial={{translateX: 300, opacity: 0}}
          animate={{translateX: 0, opacity: 1, transition: {duration: 0.5, delay: 0.3}}}>
          <Div className={'flex-col gap-4 w-full'}>
            <Text typography={['md', 'md']} type={"normal"}>{question}</Text>
            {choices.map((choice, choiceIndex) => {
              return (
                <motion.label
                  initial={{translateX: 300, opacity: 0}}
                  animate={{translateX: 0, opacity: 1, transition: {duration: 0.5, delay: choiceIndex * 0.3}}}
                  className={'flex gap-3 items-start'} key={choiceIndex}>
                  {type === 'single' ? (
                    <RadioButton name={choice.title}/>
                  ) : (
                    <Checkbox className={'mt-1'} size={'small'}/>
                  )}
                  <Div className={'flex-col'}>
                    <Text typography={['sm', 'sm']}>{choice.icon}</Text>
                    <Text color={'grey.800'} type={'medium'}
                          typography={['sm', 'sm']}>{choice.title}</Text>
                  </Div>
                </motion.label>
              )
            })}
          </Div>
        </motion.div>
      </AnimatePresence>
    </Div>
  )
}

export default QuestionCard