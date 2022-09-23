<?php include "header.php" ?>

 <!-- header starts here -->

 <div class="py-5 bg-image-full" style="background-image: url('images/contact.png')">
        <div class="text-center my-5">

            <h1 class="text-white fs-3 fw-bolder">Contact Us</h1>
            
        </div>
    </div>
    <!-- header ends here -->

<div class="mainarea" style="padding-top: 0px;">

<section class="h-100 ">

<div class="container py-5 h-100">
    <p style="text-align: center; margin-top:20px;"> Write to us on your queries and we will get back to you shortly <br> <i>
            (Fields marked with * are required)</i></p>
    <!-- <form name="sentMessage" novalidate="novalidate" id="reg-form"> -->
        <div class="row d-flex justify-content-center align-items-center h-100">

            <div class="col">

                <div class="card card-registration my-4">

                    <div class="row g-0">
                        <div class="col-md-6 col-sm-12 col-xl-6 d-none d-xl-block" style="overflow: hidden;height: 613px;">
                            <img src="images/img4.png" alt="Sample photo" class="img-fluid" style="border-top-left-radius: .25rem;     width: 550px; border-bottom-left-radius: .25rem;" />
                        </div>
                        <div class="col-md-6 col-sm-12">
                            <div class="card-body p-md-5 text-black">

                                <div class="row">
                                    <div class="col-md-6  ">
                                        <div class="form-outline form-group">
                                            <input type="text" id="name" name="name" placeholder="Name" data-validation-required-message="Please enter your name." required="required" class="form-control form-control-lg" />
                                            <p class="help-block text-danger"></p>

                                        </div>
                                    </div>

                                    <div class="col-md-6 ">
                                        <div class="form-outline ">
                                            <input type="text" id="email" placeholder="Email" class="form-control form-control-lg" />
                                        </div>
                                    </div>

                                </div>






                            <div class="row">

                                <div class="col-md-6 ">
                                    <div class="form-outline ">
                                        <input type="text" id="phone" placeholder="Phone" class="form-control form-control-lg" />
                                    </div>
                                </div>
                                <div class="col-md-6 ">
                                    <div class="form-outline ">
                                        <input type="text" id="company" placeholder="Company" class="form-control form-control-lg" />
                                    </div>
                                </div>
                            </div>

                            

                            <div class="form-outline ">
                                <input type="text" placeholder="Job Title" id="job_title" class="form-control form-control-lg" />
                            </div>




                            <div class="form-outline ">
                                <input type="text" id="message" placeholder="Message" class="form-control form-control-lg" />
                            </div>


                            <div class="clearfix"></div>
                            <div class="col-lg-12 text-center">
                                <div id="success"></div>
                                <button id="sendMessageButton" class="btn btn-primary btn-xl text-uppercase" type="submit">Send Message</button>
                            </div>
                        </div>
                    </div>
                    </div>

                </div>
            </div>
        </div>
</div>
<!-- </form> -->
</div>
</section>

</div>



<style>
.card-registration .select-input.form-control[readonly]:not([disabled]) {
    font-size: 1rem;
    line-height: 2.15;
    padding-left: .75em;
    padding-right: .75em;
}

.card-registration .select-arrow {
    top: 13px;
}
.form-control{
    font-size: 1em;
    font-weight: 200;

}
</style>
<script src="js/jquery.min.js"></script>
<script src="js/contact_me.js"></script>

<!-- <script>
$(".navbars").click(function() {
    $(".mobile-nav-links").toggleClass("opened");
    $(".navbars").toggleClass("open");
});
</script> -->

<?php include "footer.php" ?>
