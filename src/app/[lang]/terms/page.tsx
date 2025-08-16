'use client';
import Container from '@elements/container';
import Div from '@elements/div';
import Text from '@elements/text';
import {
  IntellectualPropertyIcon,
  PermitIcon,
  ConductIcon,
  PricingIcon,
  ReturnsIcon,
  CustomIcon,
  PrivacyIcon,
  ThirdPartyIcon,
  Warranty2Icon,
  LiabilityIcon,
  IndemnificationIcon,
  LawIcon,
} from '../../../assets/icons/terms';

const iconClass = 'w-7 h-7 text-orange-500 mr-2';

const Terms = () => {
  return (
    <Container>
      <Div className={'px-5 mx:px-0 w-full flex-col max-w-[1440px] md:pt-20 pt-5 mx-auto'}>
        <Text type='bold' typography={['huge', 'huge']} className='mb-2'>Terms and Conditions</Text>
        <Text type='medium' typography={['sm', 'sm']} className='mb-4'>Earthly Herbs Inc. (&quot;Earthly Herbs&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) owns and operates the website located at http://www.earthlyherbs.ca (the &quot;Site&quot;). By accessing, browsing, shopping, or using any part of this Site, you agree to these Terms and Conditions (&quot;Terms&quot;) and confirm that you are at least 18 years of age.</Text>
        <Text type='medium' typography={['sm', 'sm']} className='mb-4'>Please read these Terms carefully. They include important information regarding your legal rights, remedies, and obligations, including various limitations and exclusions. If you do not agree with these Terms, do not use this Site.</Text>
        <Text type='medium' typography={['sm', 'sm']} className='mb-4'>We may update these Terms at any time. When we do, we will revise the &quot;Last Updated&quot; date below. Your continued use of the Site after changes are posted signifies your acceptance of the updated Terms.</Text>
        <Text type='medium' typography={['xs', 'xs']} className='mb-8 text-grey-500'>Last Updated: 2025-06-10</Text>

        <Div className='grid grid-cols-1 md:grid-cols-3 gap-12 mb-12'>
          {/* Section 1 */}
          <Div className='flex-col'>
            <Div className='flex items-center mb-2'>
              <IntellectualPropertyIcon className={iconClass} />
              <Text type='bold' typography={['lg', 'lg']}>1. Intellectual Property</Text>
            </Div>
            <Text type='medium' typography={['sm', 'sm']} className='mb-2'>Unless otherwise noted, all content on this Site — including images, text, graphics, logos, icons, videos, product descriptions, and designs — is the intellectual property of Earthly Herbs or its content suppliers and is protected by copyright, trademark, and other applicable laws.</Text>
            <Text type='medium' typography={['sm', 'sm']}>You may not copy, reproduce, modify, distribute, transmit, display, perform, or create derivative works from any content on this Site without our express written consent.</Text>
          </Div>

          {/* Section 2 */}
          <Div className='flex-col'>
            <Div className='flex items-center mb-2'>
              <PermitIcon className={iconClass} />
              <Text type='bold' typography={['lg', 'lg']}>2. Permitted Use</Text>
            </Div>
            <Text type='medium' typography={['sm', 'sm']} className='mb-2'>Earthly Herbs grants you a limited, non-exclusive, non-transferable license to access and use the Site for personal, non-commercial purposes only. You agree not to:</Text>
            <ul className='list-disc pl-6 mb-2 text-d-sm'>
              <li>Resell or commercially exploit any content or services on the Site;</li>
              <li>Collect or use product listings, descriptions, or prices for commercial use;</li>
              <li>Create derivative works based on the Site;</li>
              <li>Download or copy account information for another merchant&apos;s benefit;</li>
              <li>Use framing, meta tags, or hidden text using our name or trademarks;</li>
              <li>Use data mining, scraping, robots, or similar data gathering tools.</li>
            </ul>
            <Text type='medium' typography={['sm', 'sm']}>Any unauthorized use immediately terminates your limited license.</Text>
          </Div>

          {/* Section 3 */}
          <Div className='flex-col'>
            <Div className='flex items-center mb-2'>
              <ConductIcon className={iconClass} />
              <Text type='bold' typography={['lg', 'lg']}>3. User Conduct and Submissions</Text>
            </Div>
            <Text type='medium' typography={['sm', 'sm']} className='mb-2'>You agree not to upload, post, transmit, or otherwise make available any content that:</Text>
            <ul className='list-disc pl-6 mb-2 text-base'>
              <li>Is unlawful, defamatory, harassing, abusive, or obscene;</li>
              <li>Infringes on any intellectual property or personal rights of others;</li>
              <li>Contains software viruses or harmful code;</li>
              <li>Constitutes spam, mass mailings, or other unsolicited marketing;</li>
              <li>Impersonates any person or entity, or misleads as to origin.</li>
            </ul>
            <Text type='medium' typography={['sm', 'sm']}>You are solely responsible for your content and actions on the Site.</Text>
          </Div>

          {/* Section 4 */}
          <Div className='flex-col'>
            <Div className='flex items-center mb-2'>
              <PricingIcon className={iconClass} />
              <Text type='bold' typography={['lg', 'lg']}>4. Pricing, Orders, and Product Information</Text>
            </Div>
            <Text type='medium' typography={['sm', 'sm']} className='mb-2'>All prices are listed in Canadian Dollars unless otherwise noted. Earthly Herbs reserves the right to update or discontinue products or pricing without prior notice.</Text>
            <Text type='medium' typography={['sm', 'sm']} className='mb-2'>All purchases are made pursuant to a shipment contract, meaning risk of loss and title pass to you upon delivery to the shipping carrier. We strive for accuracy but do not guarantee that product descriptions or other content are error-free.</Text>
            <Text type='medium' typography={['sm', 'sm']} className='mb-2'>If a product is not as described, your sole remedy is to return it in unused condition. If a product is incorrectly priced, we may cancel the order or contact you for instructions before shipment.</Text>
          </Div>

          {/* Section 5 */}
          <Div className='flex-col'>
            <Div className='flex items-center mb-2'>
              <ReturnsIcon className={iconClass} />
              <Text type='bold' typography={['lg', 'lg']}>5. Returns &amp; Refunds</Text>
            </Div>
            <Text type='medium' typography={['sm', 'sm']} className='mb-2'>For standard (non-custom) orders, returns are accepted within 14 days of delivery, provided items are unopened, unused, and in original packaging. Return shipping costs are the buyer&apos;s responsibility unless the item is defective or an error was made by Earthly Herbs.</Text>
            <Text type='medium' typography={['sm', 'sm']}>Please contact customer service before sending returns.</Text>
          </Div>

          {/* Section 6 */}
          <Div className='flex-col'>
            <Div className='flex items-center mb-2'>
              <CustomIcon className={iconClass} />
              <Text type='bold' typography={['lg', 'lg']}>6. Custom Orders and Special Requests</Text>
            </Div>
            <Text type='medium' typography={['sm', 'sm']} className='mb-2'>Custom blends, private label products, or special orders are not eligible for refunds or exchanges once an order has been placed. We strongly recommend confirming your custom request with your Earthly Herbs account manager beforehand.</Text>
            <Text type='medium' typography={['sm', 'sm']}>If you&apos;re not satisfied with a custom order, please reach out to your account representative — we will make every effort to ensure your satisfaction.</Text>
          </Div>

          {/* Section 7 */}
          <Div className='flex-col'>
            <Div className='flex items-center mb-2'>
              <PrivacyIcon className={iconClass} />
              <Text type='bold' typography={['lg', 'lg']}>7. Privacy and Personal Information</Text>
            </Div>
            <Text type='medium' typography={['sm', 'sm']}>Your use of this Site is also governed by our Privacy Policy, which explains how we collect, use, and protect your personal information.</Text>
          </Div>

          {/* Section 8 */}
          <Div className='flex-col'>
            <Div className='flex items-center mb-2'>
              <ThirdPartyIcon className={iconClass} />
              <Text type='bold' typography={['lg', 'lg']}>8. Third-Party Links and Services</Text>
            </Div>
            <Text type='medium' typography={['sm', 'sm']}>The Site may contain links to third-party websites or tools. Earthly Herbs does not control or endorse these and is not responsible for their content, functionality, or practices. Your use of any third-party service is at your own risk.</Text>
          </Div>

          {/* Section 9 */}
          <Div className='flex-col'>
            <Div className='flex items-center mb-2'>
              <Warranty2Icon className={iconClass} />
              <Text type='bold' typography={['lg', 'lg']}>9. Disclaimer of Warranties</Text>
            </Div>
            <Text type='medium' typography={['sm', 'sm']} className='mb-2'>Except as expressly stated with respect to specific products, all content and services on this Site are provided &quot;as is&quot; and &quot;as available,&quot; without warranties of any kind, either express or implied, to the fullest extent permitted by applicable law. This includes, but is not limited to, implied warranties of merchantability, fitness for a particular purpose, and non-infringement.</Text>
            <Text type='medium' typography={['sm', 'sm']}>We do not warrant that the Site will be error-free, uninterrupted, secure, or free from viruses or other harmful components.</Text>
          </Div>

          {/* Section 10 */}
          <Div className='flex-col'>
            <Div className='flex items-center mb-2'>
              <LiabilityIcon className={iconClass} />
              <Text type='bold' typography={['lg', 'lg']}>10. Limitation of Liability</Text>
            </Div>
            <Text type='medium' typography={['sm', 'sm']} className='mb-2'>To the maximum extent permitted by law, Earthly Herbs and its directors, employees, agents, suppliers, or affiliates shall not be liable for any indirect, incidental, special, or consequential damages arising out of or relating to your use of the Site or the purchase of any product.</Text>
            <Text type='medium' typography={['sm', 'sm']}>This includes, but is not limited to, loss of profits, data, or business opportunities — even if advised of the possibility of such damages.</Text>
          </Div>

          {/* Section 11 */}
          <Div className='flex-col'>
            <Div className='flex items-center mb-2'>
              <IndemnificationIcon className={iconClass} />
              <Text type='bold' typography={['lg', 'lg']}>11. Indemnification</Text>
            </Div>
            <Text type='medium' typography={['sm', 'sm']} className='mb-2'>You agree to indemnify, defend, and hold harmless Earthly Herbs and its affiliates, officers, directors, employees, and agents from any claim, demand, loss, or liability (including legal fees) arising from:</Text>
            <ul className='list-disc pl-6 mb-2 text-base'>
              <li>Your use or misuse of the Site;</li>
              <li>Violation of these Terms;</li>
              <li>Infringement of any intellectual property or other rights of any person or entity.</li>
            </ul>
          </Div>

          {/* Section 12 */}
          <Div className='flex-col'>
            <Div className='flex items-center mb-2'>
              <LawIcon className={iconClass} />
              <Text type='bold' typography={['lg', 'lg']}>12. Governing Law and Jurisdiction</Text>
            </Div>
            <Text type='medium' typography={['sm', 'sm']}>These Terms are governed by the laws of Ontario, Canada, without regard to conflict of law principles. You agree to submit to the exclusive jurisdiction of the provincial and federal courts located in Ontario for any disputes arising out of or relating to these Terms or your use of the Site. Earthly Herbs makes no representation that materials in this Site are appropriate or available for use in other locations. Those who choose to access this web site from outside Canada do so on their own initiative and are responsible for compliance with all applicable laws.</Text>
          </Div>
        </Div>
      </Div>
    </Container>
  );
};

export default Terms;
