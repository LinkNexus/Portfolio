<?php

namespace App\EventHandler;

use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Event\ExceptionEvent;
use Symfony\Component\HttpKernel\KernelEvents;
use Twig\Environment;

readonly class NotFoundSubscriber implements EventSubscriberInterface
{

    public function __construct(private Environment $twig)
    {}

    public static function getSubscribedEvents(): array
    {
        return [
            KernelEvents::EXCEPTION => 'onKernelException'
        ];
    }

    public function onKernelException(ExceptionEvent $exceptionEvent): void
    {
        $content = $this->twig->render('app/index.html.twig', [
            'form' => null,
            "path" => null,
        ]);

        $exception = $exceptionEvent->getThrowable();
        if (method_exists($exception, 'getStatusCode') && $exception->getStatusCode() == 404) {
            $exceptionEvent->setResponse(new Response($content, 404));
        }
    }
}