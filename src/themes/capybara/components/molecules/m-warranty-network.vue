<template>
    <div class="container">
        <div class="rectangle_warranty d-flex align-center">
            <SfImage
                src="/assets/images/swap-europe-warranty.png"
                class="image_warranty"
                />
            <div class="rectangle_warranty_text"> 
                <h3>Our Warranty Network: SWAP</h3>

                <p>At SWAP, we believe that it is always better to repair a tool than to throw it away..</p>

                <p>With our permanent stock of over 20,000 reference parts, compatible with most brands, SWAP, is the leading 
                European parts stockist in DIY and gardening, extending the life of your machines whilst helping you save on cost. 
                Lawn mower, electric drills, sanders ... keep all your tools for longer while saving money!</p>

                <p>Finally, and because the obsolescence of machines is not inevitable, SWAP helps you to get the best possible
                 performance and long-term use of your products by monitoring their life cycles.</p>

                <p>From the servicing or installation of equipment such as an air conditioning unit or a wood stove, to the maintenance 
                of your petrol tools (winter maintenance) through the replacement of a defective part or a repair, SWAP takes care 
                of your tools!</p>
            </div>
        </div>
    </div>
</template>

<script>
import { SfImage } from '@storefront-ui/vue';
export default { components: { SfImage } };
</script>

<style lang="scss">
@import "~@storefront-ui/shared/styles/helpers/breakpoints";
.rectangle_warranty {
  box-sizing: border-box;
  border: 2px solid var(--c-light);
  border-radius: 5px;
  background-color: var(--_c-light-secondary);
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
  margin: 30px 0;
    .sf-image{
        width: 100%;
        text-align: center;
    }
    @media screen and (max-width: 1024px){
        flex-direction: column;
    }
    .rectangle_warranty_text{
        padding: 0 30px;
        @media screen and (max-width: 1024px){
            margin: 20px;
        }
        h3{
            font-family: 'Poppins-Bold';
            color: var(--_c-green-primary-lighten);
        }
        p {
                font-family: Poppins;
                font-size: 13px;
        }
    }

}

</style>