<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Translation\LocaleSwitcher;

final class AppController extends AbstractController
{
    private readonly SessionInterface $session;

    private readonly LocaleSwitcher $localeSwitcher;

    private readonly Request $request;

    public function __construct(RequestStack $requestStack, LocaleSwitcher $localeSwitcher)
    {
        $this->session = $requestStack->getSession();
        $this->localeSwitcher = $localeSwitcher;
        $this->request = $requestStack->getCurrentRequest();
    }

    private function localeSwitch(string $routeName): RedirectResponse
    {
        if ($this->session->get('lang')) {
            $this->request->headers->set('Accept-Language', $this->session->get('lang'));
        }

        $this->localeSwitcher->setLocale($this->request->getPreferredLanguage(['en', 'de', 'fr']));
        return $this->redirectToRoute($routeName);
    }

    #[Route('/', name: 'home')]
    public function index(): Response
    {
        return $this->localeSwitch('locale_home');
    }

    #[Route('/about', name: 'about')]
    public function about(): Response
    {
        return $this->localeSwitch('locale_about');
    }

    #[Route('/services', name: 'services')]
    public function services(): Response
    {
        return $this->localeSwitch('locale_services');
    }

    #[Route('/projects', name: 'projects')]
    public function projects(Request $request): Response
    {
        return $this->localeSwitch('locale_projects');
    }

    #[Route('/contact', name: 'contact')]
    public function contact(): Response
    {
        return $this->localeSwitch('locale_contact');
    }

    #[Route('/resume', name: 'resume')]
    public function resume() : Response
    {
        return $this->localeSwitch('locale_resume');
    }

    #[Route('/lang/{locale}/{previousRoute}', name: 'lang')]
    public function setLocale(string $locale, ?string $previousRoute = ''): Response
    {
        $this->session->set('lang', $locale);
        return $previousRoute && $previousRoute !== '' ?
            $this->redirectToRoute($previousRoute) :
            $this->redirectToRoute('home');
    }

    #[Route('/lang/get', name: 'getLocale', methods: ['POST'])]
    public function getAcceptedLanguage(): JsonResponse
    {
        return $this->json(['locale' => $this->localeSwitcher->getLocale()]);
    }

    #[Route('/sitemap.{_format}', name: 'sitemap', requirements: [
        '_format' => 'xml',
    ], format: 'xml')]
    public function sitemap(): Response
    {
        $routeNames = [
            'home',
            'about',
            'services',
            'projects',
            'contact',
        ];

        $urls = [];
        array_walk($routeNames, function (&$route) use (&$urls) {
           $urls[] = $this->generateUrl($route);
        });

        $response = $this->render('seo/sitemap.xml.twig', [
            'urls' => $urls,
        ]);
        $response->headers->set('Content-Type', 'text/xml');

        return $response;
    }
}
