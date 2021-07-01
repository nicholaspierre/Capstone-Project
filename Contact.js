
import helloclass from './images/helloclass.gif'

function Contact() {
  return (
    <section>
      <header class="main">
        <h1>Contact Me</h1>
      </header>


      <h2 id="content"><img src={helloclass} alt="" /></h2>
      <p>Thank you for visiting my React App. Have a Sunny Day !</p>
      <div class="row">
        <div class="col-6 col-12-small">
          <h3>Sem turpis amet semper</h3>
          <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi
          integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat commodo eu sed
          ante lacinia. Sapien a lorem in integer ornare praesent commodo adipiscing arcu in massa
          commodo lorem accumsan at odio massa ac ac. Semper adipiscing varius montes viverra nibh
          in adipiscing blandit tempus accumsan.</p>
        </div>
        <div class="col-6 col-12-small">
          <h3>Magna odio tempus commodo</h3>
          <p>In arcu accumsan arcu adipiscing accumsan orci ac. Felis id enim aliquet. Accumsan ac
          integer lobortis commodo ornare aliquet accumsan erat tempus amet porttitor. Ante
          commodo blandit adipiscing integer semper orci eget. Faucibus commodo adipiscing mi eu
          nullam accumsan morbi arcu ornare odio mi adipiscing nascetur lacus ac interdum morbi
          accumsan vis mi accumsan.</p>
        </div>

        <div class="col-4 col-12-medium">
          <h3>Interdum sapien gravida</h3>
          <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi
          integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante
          lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit.</p>
        </div>
        <div class="col-4 col-12-medium">
          <h3>Faucibus consequat lorem</h3>
          <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi
          integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante
          lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit.</p>
        </div>
        <div class="col-4 col-12-medium">
          <h3>Accumsan montes viverra</h3>
          <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi
          integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante
          lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit.</p>
        </div>
      </div>

      <hr class="major" />


    </section>
  );
}

export default Contact;
