import Image from 'next/image';
import React from 'react';

function About() {

    return (
        <section className="lg:py-16" >
            <div>
                <div className="px-[4%] py-[4%] w-full flex flex-col items-start text-start">
                    <Image
                        src={'/history.png'}
                        alt={'Gambar Lokasi Kerupuk Cap Keluarga'}
                        height={400}
                        width={500}
                        className='rounded-sm'
                    />


                    <h1 className="text-[34px] text-black  font-extrabold">
                        KERUPUK KELUARGA
                    </h1>
                    <h1 className="text-[34px] text-black  font-extrabold">
                        BELITUNG
                    </h1>
                    <h2 className="text-[15px] text-black  font-extrabold">
                        HISTORY, TRADITION AND QUALITY SINCE 1970
                    </h2>
                    <p className='text-black pt-3 text-justify'>
                        Kerupuk cap Keluarga (Family brand snack crackers) have a long history.
                        As a food industry that has grown from small to large, the business journey
                        of its founders, Huang Yatian and Zhang Jilian, began with the end of their
                        previous careers. It is said that at that time, due to well-known reasons,
                        all Chinese schools in Indonesia were closed, and the small island of Belitung
                        was not immune. Like many Chinese school teachers at the time, Huang Yatian
                        and Zhang Jilian were also hit by unemployment. In order to face the challenges
                        of real life, they worked hard to explore and try again and again.
                        Belitung Island is surrounded by the sea, and going out to sea to fish
                        has become a unique place for locals to plan. So bidding farewell to the
                        classroom homework seawall became the choice of the unemployed teacher Huang.
                        In order to support her husband&lsquo;s new fishing business, Teacher Zhang was
                        also creative and processed the fish and shrimp into biscuit snacks. After
                        several practices and improvements, in 1970, their product manufacturing
                        industry began to be marketed as a family food industry. Both in terms of
                        production and marketing, it has begun to take shape, and has gradually been
                        welcomed by customers and recognized by government departments.

                    </p>
                    <p className='text-black pt-5 text-justify '>
                        With the passage of time and market demand, the style of products,
                        the perfection of packaging design, and the diversification of raw
                        materials are constantly being optimized. Fresh mackerel, squid and
                        shrimp are good raw materials for making various seafood delicacies.
                        Relying on the unique resources of Belitung surrounded by the sea, it
                        has an inexhaustible and rich resource for producing delicious seafood.
                        In 1998, as the production and sales of crackers increased,
                        &ldquo;Family&ldquo; brand was introduced as a product label for various
                        types of products. In order to adapt to the needs of the market,
                        cooperate and support the increase in production, and keep up
                        with the pace of the local tourism industry, &ldquo;Family&ldquo; group has
                        now opened a number of chain stores, and many local small food
                        retailers have also become good partners. Production and marketing
                        have organically become a complementary whole, providing space for
                        the survival and development of &ldquo;Family&ldquo; brand. The name &ldquo;Family&ldquo;
                        itself was inspired by the founder Huang Yatian&lsquo;s admiration for
                        the Chinese motto &ldquo;A harmonious family brings prosperity&ldquo;, which
                        means that the family will be united and harmonious for generations.
                        With a harmonious family, everything will turn into infinite beauty
                        and prosperity.
                    </p>
                    <Image
                        src={'/indonesia.png'}
                        alt={'Gambar Lokasi Kerupuk Cap Keluarga'}
                        height={400}
                        width={500}
                        className='pt-4 rounded-md'
                    />

                </div>

            </div>
        </section >
    );
};

export default About
