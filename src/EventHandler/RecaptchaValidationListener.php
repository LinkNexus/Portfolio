<?php

namespace App\EventHandler;

use ReCaptcha\ReCaptcha;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\Form\FormError;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;
use Symfony\Component\HttpFoundation\Request;

class RecaptchaValidationListener implements EventSubscriberInterface
{

    public function __construct(private readonly Recaptcha $reCaptcha)
    {
    }

    /**
     * @inheritDoc
     */
    public static function getSubscribedEvents(): array
    {
        return [
            FormEvents::POST_SUBMIT => 'onPostSubmit'
        ];
    }

    public function onPostSubmit(FormEvent $event): void
    {
        $request = Request::createFromGlobals();

        $result = $this->reCaptcha
            ->setExpectedHostname($request->getHost())
            ->verify($request->request->get('g-recaptcha-response'), $request->getClientIp());

        if (!$result->isSuccess()) {
            $event->getForm()->addError(new FormError('The captcha is invalid. Please try again.'));
        }
    }
}