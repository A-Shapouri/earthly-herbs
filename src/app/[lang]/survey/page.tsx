'use client'
import Container from '@elements/container';
import Div from '@elements/div';
import Text from '@elements/text';

import {AnimatePresence, motion} from 'motion/react';
import Button from "@elements/button";
import AnimatedTyping from '@modules/animated-typing'
import {useEffect, useState} from "react";
import classNames from "@utils/helpers/class-names";
import Divider from "@elements/divider";
import QuestionCard from './components/question-card'
import ProductItem from "@modules/product-item";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@store/root-reducer";
import {ProductsActions} from "@store/products/products-actions";
import {ShopActions} from "@store/shop/shop-actions";

const surveySteps = [
  {
    question: '1. What’s your primary reason for drinking tea? (Choose one or more)',
    choices: [
      {
        title: 'Relaxation & Stress Relief',
        icon: '☕'
      },
      {
        title: 'Health & Wellness',
        icon: '🌱'
      },
      {
        title: 'Energy Boost',
        icon: '🌅'
      },
      {
        title: 'Better Sleep',
        icon: '🌙'
      },
      {
        title: 'Enjoyment of Flavor',
        icon: '🍵'
      }
    ],
    type: 'multiple'
  },
  {
    question: '2. How do you prefer your tea to taste?',
    choices: [
      {
        title: 'Floral',
        icon: '🌸'
      },
      {
        title: 'Fruity',
        icon: '🍋'
      },
      {
        title: 'Earthy/Herbal',
        icon: '🍂'
      },
      {
        title: 'Minty',
        icon: '🌿'
      },
      {
        title: 'Spicy/Warm',
        icon: '🍫'
      }
    ],
    type: 'single'
  },
  {
    question: '3. Do you have any specific health goal?',
    choices: [
      {
        title: 'Increase Energy',
        icon: '🔋'
      },
      {
        title: 'Reduce Anxiety/Stress',
        icon: '💆‍♂️'
      },
      {
        title: 'Boost Immunity',
        icon: '🤒'
      },
      {
        title: 'Detox & Digestion',
        icon: '💧'
      },
      {
        title: 'Improve Sleep',
        icon: '😴'
      },
      {
        title: 'No specific goal',
        icon: '🛑'
      }
    ],
    type: 'single'
  },
  {
    question: '4. What time of day do you usually drink tea?  (Choose one or more)',
    choices: [
      {
        title: 'Morning',
        icon: '🌞'
      },
      {
        title: 'Afternoon',
        icon: '🌅'
      },
      {
        title: 'Evening/Night',
        icon: '🌙'
      },
    ],
    type: 'multiple'
  },
  {
    question: '5. How do you feel about caffeine in your tea?',
    choices: [
      {
        title: 'I need caffeine (high-energy)',
        icon: '☕'
      },
      {
        title: 'I’m okay with mild caffeine',
        icon: '🍵'
      },
      {
        title: 'I prefer caffeine-free',
        icon: '🌿'
      },
    ],
    type: 'multiple'
  },
  {
    question: '6. Do you like adding milk or sweeteners to your tea?',
    choices: [
      {
        title: 'Yes, I like creamy teas (chai, matcha, etc.)',
        icon: '🥛'
      },
      {
        title: 'I prefer sweet teas (honey, sugar)',
        icon: '🍯'
      },
      {
        title: 'No, I like my tea plain',
        icon: '🌱'
      },
    ],
    type: 'multiple'
  },
  {
    question: '7. How adventurous are you with new flavors?',
    choices: [
      {
        title: 'Very adventurous – I love trying bold flavors',
        icon: '🔥'
      },
      {
        title: 'I prefer mild, familiar tastes',
        icon: '🍃'
      },
      {
        title: 'I like sweet, dessert-like teas',
        icon: '🍪'
      },
    ],
    type: 'multiple'
  },
]

const Home = () => {
  const [selectedStep, setSelectedStep] = useState<any>(null)
  const {surveyProducts} = useSelector((state: RootState) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ProductsActions.getProductsList());
  }, []);

  const stepHandler = ({step}: { step: any }) => {
    setSelectedStep(step)
    if (step === 'final') {
      dispatch(ProductsActions.getSurveyProducts())
    }
  }

  const handleAddProduct = () => {
    for (const id in surveyProducts) {
      dispatch(ShopActions.addToCart({
        id: surveyProducts[id].id,
        name: surveyProducts[id].title,
        price: surveyProducts[id].price,
        image: surveyProducts[id].image,
      }));
    }
  };
    console.log(surveyProducts)
  return (
    <Container>
      <Div className={'py-14 bg-flurries-500 justify-center items-center h-[calc(100dvh-8rem)] w-full overflow-auto'}>
        {selectedStep ? (
          <>
            {selectedStep === 'final' ? (
              <Div className={'bg-white w-3/5 py-8 flex-col rounded-3xl items-center h-full justify-between'}>
                <Div className={'w-1/2 gap-4 flex-col items-center'}>
                  <Text type={'bold'} typography={['lg', 'xl']}>Results</Text>
                  <Text
                    color={'grey.800'}
                    type={'medium'}
                    typography={['xs', 'xs']}>
                    "Based on your preferences, we think you'll love these teas!"
                  </Text>
                  <Div className={'gap-4 mt-12'}>
                  {surveyProducts && surveyProducts.length > 0 ? surveyProducts.map((item, index) => (
                    <AnimatePresence mode={'wait'}>
                      {item?.id && (
                        <motion.div
                          key={item.title + index}
                          className={'flex flex-1'}
                          initial={{opacity: 0, scale: 0}}
                          exit={{opacity: 0, scale: 0}}
                          animate={{opacity: 1, scale: 1}}
                          transition={{duration: 0.4}}>
                          <ProductItem
                            id={item.id}
                            isHealthy={item.isHealthy}
                            isNew={item.isNew}
                            image={item.image} price={item.price} rate={item.rate} title={item.title}/>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )) : null}
                  </Div>
                </Div>
                <Button
                  onClick={() => handleAddProduct()}
                  className={'w-2/5 !h-16'}
                  color={'secondary'}
                >
                  Add to Cart ({surveyProducts.length} products)
                </Button>
              </Div>
            ) : (
              <Div className={'bg-white w-3/5 py-8 flex-col rounded-3xl items-center h-full justify-between'}>
                <Div className={'w-1/2 gap-4 flex-col items-center'}>
                  <Text type={'bold'} typography={['lg', 'xl']}>Questions</Text>
                  <Text
                    color={'grey.800'}
                    type={'medium'}
                    typography={['xs', 'xs']}>
                    Please fill out this form with the required information
                  </Text>
                  <Div className={'w-full items-center mt-4'}>
                    <Div
                      className={classNames('min-h-9 min-w-9 transition-all duration-500 rounded-full border items-center justify-center', selectedStep >= 1 ? 'border-primary bg-primary' : 'border-control bg-white')}>
                      <Text color={selectedStep >= 1 ? 'white' : 'black'} className={'transition-all duration-500'}
                            typography={['sm', 'sm']}>
                        1
                      </Text>
                    </Div>
                    <Divider className={'w-full border-t-4 transition-all duration-500'}
                             color={selectedStep >= 2 ? 'primary' : 'control'}/>
                    <Div
                      className={classNames('min-h-9 min-w-9 transition-all duration-500 rounded-full border items-center justify-center', selectedStep >= 2 ? 'border-primary bg-primary' : 'border-control bg-white')}>
                      <Text color={selectedStep >= 2 ? 'white' : 'black'} className={'transition-all duration-500'}
                            typography={['sm', 'sm']}>
                        2
                      </Text>
                    </Div>
                    <Divider className={'w-full border-t-4 transition-all duration-500'}
                             color={selectedStep >= 3 ? 'primary' : 'control'}/>
                    <Div
                      className={classNames('min-h-9 min-w-9 transition-all duration-500 rounded-full border items-center justify-center', selectedStep >= 3 ? 'border-primary bg-primary' : 'border-control bg-white')}>
                      <Text color={selectedStep >= 3 ? 'white' : 'black'} className={'transition-all duration-500'}
                            typography={['sm', 'sm']}>
                        3
                      </Text>
                    </Div>
                    <Divider className={'w-full border-t-4 transition-all duration-500'}
                             color={selectedStep >= 4 ? 'primary' : 'control'}/>
                    <Div
                      className={classNames('min-h-9 min-w-9 transition-all duration-500 rounded-full border items-center justify-center', selectedStep >= 4 ? 'border-primary bg-primary' : 'border-control bg-white')}>
                      <Text color={selectedStep >= 4 ? 'white' : 'black'} className={'transition-all duration-500'}
                            typography={['sm', 'sm']}>
                        4
                      </Text>
                    </Div>
                    <Divider className={'w-full border-t-4 transition-all duration-500'}
                             color={selectedStep >= 5 ? 'primary' : 'control'}/>
                    <Div
                      className={classNames('min-h-9 min-w-9 transition-all duration-500 rounded-full border items-center justify-center', selectedStep >= 5 ? 'border-primary bg-primary' : 'border-control bg-white')}>
                      <Text color={selectedStep >= 5 ? 'white' : 'black'} className={'transition-all duration-500'}
                            typography={['sm', 'sm']}>
                        5
                      </Text>
                    </Div>
                    <Divider className={'w-full border-t-4 transition-all duration-500'}
                             color={selectedStep >= 6 ? 'primary' : 'control'}/>
                    <Div
                      className={classNames('min-h-9 min-w-9 transition-all duration-500 rounded-full border items-center justify-center', selectedStep >= 6 ? 'border-primary bg-primary' : 'border-control bg-white')}>
                      <Text color={selectedStep >= 6 ? 'white' : 'black'} className={'transition-all duration-500'}
                            typography={['sm', 'sm']}>
                        6
                      </Text>
                    </Div>
                    <Divider className={'w-full border-t-4 transition-all duration-500'}
                             color={selectedStep >= 7 ? 'primary' : 'control'}/>
                    <Div
                      className={classNames('min-h-9 min-w-9 transition-all duration-500 rounded-full border items-center justify-center', selectedStep === 7 ? 'border-primary bg-primary' : 'border-control bg-white')}>
                      <Text color={selectedStep >= 7 ? 'white' : 'black'} className={'transition-all duration-500'}
                            typography={['sm', 'sm']}>
                        7
                      </Text>
                    </Div>
                  </Div>
                  <QuestionCard
                    question={surveySteps[selectedStep - 1].question}
                    type={surveySteps[selectedStep - 1].type}
                    key={selectedStep ? selectedStep : "empty"}
                    choices={surveySteps[selectedStep - 1].choices}
                  />
                </Div>
                <motion.div
                  className={'flex gap-4 w-2/5'}
                  initial={{opacity: 0}}
                  animate={{opacity: 1}}
                  transition={{duration: 0.6, delay: 4.5}}
                >
                  <Button
                    variant={'text'}
                    onClick={() => stepHandler({step: selectedStep !== 1 ? selectedStep - 1 : null})}
                    className={'w-1/4 !h-16 !text-black'}
                  >
                    Previous
                  </Button>
                  {selectedStep === 7 ? (
                    <Button
                      onClick={() => stepHandler({step: 'final'})}
                      color={'secondary'}
                      className={'w-3/4 !h-16'}
                    >
                      See Results
                    </Button>
                  ) : (
                    <Button
                      onClick={() => stepHandler({step: selectedStep + 1})}
                      color={'secondary'}
                      className={'w-3/4 !h-16'}
                    >
                      Next
                    </Button>
                  )}
                </motion.div>
              </Div>
            )}
          </>
        ) : (
          <Div className={'bg-white w-3/5 py-20 flex-col rounded-3xl items-center h-full justify-between'}>
            <Div className={'w-2/5'}>
              <AnimatedTyping
                sequence={[`"Let’s find the perfect tea for you! Answer a few quick questions, and we’ll recommend teas that match your mood, taste, and wellness goals."`]}/>
            </Div>
            <motion.div
              className={'w-2/5'}
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{duration: 0.6, delay: 4.5}}
            >
              <Button onClick={() => stepHandler({step: 1})} color={'secondary'} className={'w-full !h-16'}>
                Start My Tea Journey
              </Button>
            </motion.div>
          </Div>
        )}
      </Div>
    </Container>
  );
};

export default Home;
