<?php

namespace App\DTO;

use Karser\Recaptcha3Bundle\Validator\Constraints\Recaptcha3;
use Symfony\Component\Validator\Constraints as Assert;

class ContactDTO
{
    #[Assert\NotBlank]
    #[Assert\Regex(pattern: '/[0-9a-zA-Z_]*/', message: 'The name must only contain letters, numbers, underscores and hyphens')]
    #[Assert\Length(min: 5, minMessage: 'The name must be descriptive enough and must have at least 5 characters')]
    private string $name;

    #[Assert\NotBlank]
    #[Assert\Email(message: 'The email "{{ value }}" is not a valid email.')]
    private string $email;

    #[Assert\NotBlank]
    private string $message;

    public ?string $captcha;

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): static
    {
        $this->name = $name;
        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): static
    {
        $this->email = $email;
        return $this;
    }

    public function getMessage(): ?string
    {
        return $this->message;
    }

    public function setMessage(string $message): static
    {
        $this->message = $message;
        return $this;
    }
}