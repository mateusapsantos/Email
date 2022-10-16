// Enviando e-mails usando o Node.js e o famoso nodemailer
// Importando a biblioteca de email do node.js nodemailer
var nodemailer = require('nodemailer');

// Variaveis
var nomeRemetente = 'Mateus Gotado'; // Nome do remetente
var emailRemetente = 'mateus.santosap@hotmail.com'; // E-mail do remetente
var senhaRemetente = '12345678'; // Senha do remetente

var emailDestinario = 'paulo@magnasistema.com.br'; // Nome do diretor
var nomeDestinario = 'Paulo Carvalho'; // Em-mail do diretor

// Vamos criar a conta que irá mandar os e-mails
var conta = nodemailer.createTransport({
    service: 'Gmail', // Existem outros services, você pode procurar
                      // na documentação do nodemailer como utilizar
                      // os outros serviços
    auth: {
        user: emailRemetente, // Seu usuário no Gmail
        pass: senhaRemetente // A senha da sua conta no Gmail :-)
    }
});

conta.sendMail({
    from:emailRemetente, // Quem está mandando
    to:emailDestinario, // Para quem o e-mail deve chegar
    subject: 'Solicitação de Reunião Apresentação de Indicadores', // O assunto
    html: `<strong>Oi ${nomeDestinario}!</strong>
    <p>
        Solicito uma reunião para apresentação de indicadores!
    </p>
    <br>
    <p> Atenciosamente, ${nomeRemetente}! </p>`  // O HTMl do nosso e-mail
}, function(err){
    if(err)
        throw err;

    console.log('E-mail enviado!');
});