<?php
  $SITE_TITLE = 'OES';

  if ( isset($_POST) ) {
    $name = isset($_POST['name']) ? htmlspecialchars(trim($_POST['name'])) : '';
    $email = isset($_POST['email']) ? htmlspecialchars(trim($_POST['email'])) : '';
    $phone = isset($_POST['phone']) ? htmlspecialchars(trim($_POST['phone'])) : '';
    $subject = isset($_POST['subject']) ? htmlspecialchars(trim($_POST['subject'])) : '';

    $important_seo = isset($_POST['important_seo']) ? htmlspecialchars(trim($_POST['important_seo'])) : '';
    $count_people = isset($_POST['count_people']) ? htmlspecialchars(trim($_POST['count_people'])) : '';
    $position = isset($_POST['position']) ? htmlspecialchars(trim($_POST['position'])) : '';
    $situation = isset($_POST['situation']) ? htmlspecialchars(trim($_POST['situation'])) : '';
    $situation_top = isset($_POST['situation_top']) ? htmlspecialchars(trim($_POST['situation_top'])) : '';
    $bussines = isset($_POST['bussines']) ? htmlspecialchars(trim($_POST['bussines'])) : '';

    $to = 'Elena357910@yandex.com';
    $no_reply = 'no-reply@silk-its.com';

    $headers = "From: $SITE_TITLE \r\n";
    $headers .= "MIME-Version: 1.0 \r\n";
    $headers .= "Reply-To: $email ? $email : $no_reply \r\n";
    $headers .= "Content-Type: text/html; charset=utf-8\r\n";

    $data = '<h1>'.$subject."</h1>";
    if ($name) {
      $data .= 'Имя: '.$name." " .$surname. "<br>";
    }
    if ($email) {
      $data .= 'Email: '.$email."<br>";
    }
    if ($phone) {
      $data .= 'Телефон: '.$phone."<br>";
    }
    if ($important_seo) {
      $data .= '<p><b>Что вам важно в SEO?:</b> '.$important_seo."</p>";
    }
    if ($count_people) {
      $data .= '<p><b>Какое количество посетителей на сайт для Вас достаточно в месяц?:</b> '.$count_people."</p>";
    }
    if ($position) {
      $data .= '<p><b>Какие позиции в поисковых системах Вашего сайта Вас бы устроили?:</b> '.$position."</p>";
    }
    if ($situation) {
      $data .= '<p><b>А данная ситуация Вас бы устроила? в месяц 20 000 человек:</b> '.$situation."</p>";
    }
    if ($situation_top) {
      $data .= '<p><b>А что скажите про такую ситуацию? Позиции Вашего сайта в ТОП 1:</b> '.$situation_top."</p>";
    }
    if ($bussines) {
      $data .= '<p><b>Так что вы выберете для Вашего бизнеса?:</b> '.$bussines."</p>";
    }

    $message = "<div style='background:#ccc;border-radius:10px;padding:20px;'>
        ".$data."
        <br>\n
        <hr>\n
        <br>\n
        <small>это сообщение было отправлено с сайта ".$SITE_TITLE.", отвечать на него не надо</small>\n</div>";
    $send = mail($to, $subject, $message, $headers);

    if ( $send ) {
      echo '';
    } else {
        echo '<div class="error">Ошибка отправки формы</div>';
    }

  }
  else {
      echo '<div class="error">Ошибка, данные формы не переданы.</div>';
  }
  die();
?>