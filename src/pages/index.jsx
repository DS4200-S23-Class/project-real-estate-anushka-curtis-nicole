import Link from 'next/link';


export default function Home() {
  return (
    <main className="px-6 space-y-8 max-w-7xl">
      <h1 className="text-5xl font-bold">Real Estate Data Visualization</h1>
      <div className="px-4 py-2 font-medium text-white bg-blue-600 w-min">
        <Link href="/map">View Visualization</Link>
      </div>

      <div>
        <h1 className="text-4xl font-bold">The Property Buyer's Guide to Real Estate in Martha's Vineyard</h1>

        <div>
          <h2 className="text-3xl font-bold">Motivation</h2>
          Potential buyers of homes often look for homes or residences with certain price points.
          However, when moving to a new area, it can be difficult, time consuming, and
          tedious to learn about an area and discover if the properties available
          fit a buyer’s budget preferences. This visualization will help potential buyers
          looking to move to Martha’s Vineyard discover the different neighborhoods of Martha’s
          Vineyard in a manner that will help them choose which potential areas they may choose
          to buy properties in. The visualization will use a heat map of Martha’s Vineyard that
          colors areas of Martha’s Vineyard based on the price points of those areas.
          Users can click into different areas of the heat map to zoom in on those areas and can
          then see the individual properties available for sale within those areas. Users may click on
          individual properties that are for sale in order to see data such as size, asking price,
          number of beds/baths, and contact information for the property owner to make further inquiries.
        </div>

        <div>
          <h2 className="text-3xl font-bold">Background</h2>
          <h3 className="text-2xl font-bold">Data</h3>

          <h4 className="text-xl italic">What Does This Tool Visualize</h4>

          This visualization aims to assist property buyers in identifying areas
          with opportunities for purchasing properties in Martha's Vineyard.
          The visualization employs a heat map created using
          spatial autocorrelation and data obtained from a regional multi-listing
          service (MLS) to display areas with properties for sale based on the calculated
          average price of those areas. Users can click on a certain area to zoom in and
          start viewing individual properties that are for sale in those areas.
          Users can explore individual listings that meet their criteria through
          tooltips containing relevant information, including contact details of the
          seller. Listings will be presented based on expressed area of interest.
          The visualization is intended to streamline the property buying process by
          reducing research time and facilitating interactions with unbiased agents
          and brokers. By providing an efficient means of locating properties,
          the visualization offers buyers a practical solution to the daunting task of purchasing property.

          <h4 className="text-xl italic">The Source of The Data and Biases and Ethical Issues Embedded In The Data</h4>

          <p>This real estate dataset was collected by LINKMV, a Cape and Islands based real estate multi-listing service
            (MLS) provider. The purpose of a multi-listing service is to work directly with real estate brokerages to
            aggregate real estate sales into a single unified data service. This dataset, therefore, contains
            information about real estate sales in the Cape and Islands.<br></br></p>

          <p>One important point about this dataset is that it is relatively unbiased because LINKMV is a neutral
            third-party to the real estate market. However, it's worth noting that bias may be introduced in the
            form of the "Description" attribute, which is provided by the brokerages themselves. These brokerages
            have a profit incentive to sell more properties and may therefore provide descriptions that are overly
            positive or even misleading.</p>

          <p>In terms of ethical considerations, this dataset provides granular information about people's homes,
            including the sale price, location, and features of the property. While this information is publicly
            available,
            a certain degree of inspection must be carried out by the brokerages, the MLS provider, and the data team to
            ensure that no sensitive information makes its way into the dataset. Sensitive information could include
            things
            likethe personal contact information of the property owners, or details about the property that could be
            used to identify the owner. It's important to ensure that this information is protected and not made public
            in the dataset.</p>

          <p>Another important consideration when using a real estate dataset is the potential for spatial
            autocorrelation,
            which occurs when nearby observations are more similar to each other than they are to distant observations.
            In the context of real estate data, this means that the sale prices of nearby properties may be more similar
            to
            each other than they are to sale prices of properties located further away. This can be an issue when using
            statistical models that assume independent observations, as it can lead to biased estimates of coefficients
            and
            standard errors. To account for spatial autocorrelation, techniques such as spatial regression or spatial
            filtering may be used.</p>

          <p>Another consideration when working with real estate data is the potential for missing or incomplete data.
            Incomplete data can arise from various sources, such as data entry errors, data suppression due to privacy
            concerns, or missing information on certain attributes of a property. Missing data can have an impact on the
            accuracy of statistical models, as it can lead to biased estimates of coefficients and standard errors.
            Therefore, it's important to carefully handle missing data by imputing missing values or using statistical
            techniques that can handle missing data.</p>

          <p>Finally, when using a real estate dataset, it's important to consider the potential impact on communities and
            individuals. Real estate data can reveal patterns of segregation, gentrification, and discrimination in
            housing
            markets, which can have a profound impact on people's lives. Therefore, it's important to use real estate
            data
            in an ethical and responsible manner, taking into account the potential social and economic implications of
            the
            findings. This may involve working with community organizations or advocacy groups to ensure that the
            findings
            are used in a way that promotes fairness and justice in housing markets.</p>

          <h4 className="text-xl italic">Data Quality Issues Found</h4>

          <p>Data quality issues discoverd in the data include difficult types of data such as photos and urls, as
            well as missing values and inconsistent values throughout the dataset. To clean the data, we decided to
            remove
            the photos columns and other columns that had an excess of missing data. We also decided to remove columns
            that
            included links or urls. We combined the exterior features columns to
            create a singular column with all the exterior features, formatted with commas separating the values. We
            also
            re-formatted missing values from NaN’s to empty strings, so as to have ease in concatenation, without
            resulting
            in a loss of information. Missing values were not filled in with averages or other such methods, as the data
            missing involved attributes that would be displayed as information about a listing, and weren’t major
            attributes
            like price or location. Missing values such as “last renovated date” cannot be found through mathematical
            derivation, and therefore needed to be treated as information that needs to be left out of the additional
            information portion of the listing. In terms of derived columns, creating a column describing price category
            allows us to organize the listings into 6 different groups based on the listing’s price ranges. This
            provides
            the ability to create the heat-map of the different areas of Martha’s Vineyard with certain price ranges to
            complete part of our specified domain tasks. Other simple reformatting of columns was performed for
            consistency,
            and reordering of columns was needed so that the information being presented felt organized when looked at
            in
            its tabulated format.</p>

          <div className="text-xl font-bold" id="raw data link"><Link href="/public/properties.csv">VIEW RAW DATA</Link></div>

          <div className="text-xl font-bold" id="report link"><Link href="DS4200 - pm02.pdf">VIEW REPORT</Link></div>

          <div className="text-xl font-bold" id="demo video link"><Link href="THIS WILL EVENTUALLY BE A DEMO VIDEO.pdf">VIEW DEMO VIDEO</Link></div>
        </div>

        <div>
          <h2 className='text-2xl font-bold'>Acknowledgements</h2>
          <div>
            <ul>
              <li><a href="https://v2.tailwindcss.com/docs/font-size#font-sizes">Tailwind CSS Documentation</a></li>
              <li><a href="https://www.bravolt.com/post/deploying-next-js-to-github-pages">Deploying Next.js to GitHub Pages</a></li>
              <li>
                <a href="https://transform.tools/html-to-jsx">HTML to jsx</a>
              </li>
              <li><a href="https://www.hyperui.dev/">Free Open Source Tailwind CSS Components</a></li>
              <li>
                <a href="https://wattenberger.com/blog/react-and-d3">React & D3</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
