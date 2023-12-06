import React from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion'
import axios from 'axios'
import baseApiUrl from '@/utils/baseApiUrl'
import ReactMarkdown from 'react-markdown'

const FaqContent = () => {
  const [faq, setFaq] = React.useState()
  React.useEffect(() => {
    const getFaq = async () => {
      const response = await axios.get(
        `${baseApiUrl}/api/faq?populate=faqList`,
      )
      setFaq(response.data)
      // console.log(response.data);
    }
    getFaq()
  }, [])
  return (
    <>
      <div className="faq-area ptb-100">
        <div className="container">
          <div className="section-title">
            <span>FAQ</span>
            <h2>Frequently Ask Questions</h2>
          </div>

          {faq && (
            <div className="faq-accordion">
              <Accordion preExpanded={['a']}>
                {faq.data.attributes.faqList.map((faqInfo) => (
                  <AccordionItem key={faqInfo.id} uuid={faqInfo.uuid}>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        {faqInfo.title}
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <ReactMarkdown>
                        {faqInfo.text}
                      </ReactMarkdown>
                    </AccordionItemPanel>
                  </AccordionItem>
                ))}
              
              </Accordion>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default FaqContent
