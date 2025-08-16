'use client';
import Container from '@elements/container';
import Div from '@elements/div';
import Text from '@elements/text';
import Collapsible from '@elements/collapsable';
import { faqItems } from './data';

const FAQ = () => {
  return (
    <Container>
      <Div className={'px-5 md:px-0 w-full flex-col max-w-[1440px] pt-5 md:pt-20'}>
        <Text type='bold' typography={['huge', 'huge']}>Frequently Asked Questions</Text>
        <Div className={'flex-col gap-8 items-center w-full mb-20 mt-12'}>
          {faqItems.map((section, sectionIndex) => (
            <Div key={section.section} className="w-full flex-col gap-4">
              <Text type='bold' typography={['xl', 'xl']} className="mb-4">{section.section}</Text>
              {section.items.map((item, index) => (
                <Collapsible
                  className='w-full'
                  key={item.id}
                  header={item.question}
                >
                  {item.answer.includes('<div') ? (
                    <div
                      className="leading-[140%]"
                      dangerouslySetInnerHTML={{ __html: item.answer }}
                    />
                  ) : (
                    <Text
                      type='medium'
                      typography={['sm', 'sm']}
                      className='leading-[140%] whitespace-pre-wrap'
                    >
                      {item.answer}
                    </Text>
                  )}
                </Collapsible>
              ))}
            </Div>
          ))}
        </Div>
      </Div>
    </Container>
  );
};

export default FAQ;
