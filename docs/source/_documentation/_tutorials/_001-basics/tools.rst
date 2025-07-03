.. Author: Akshay Mestry <xa@mes3.dev>
.. Created on: Saturday, November 02, 2024
.. Last updated on: Wednesday, July 3, 2025

:og:title: Open Science Tools
:og:description: Tool and workflows to participate in Open Science initiatives.

.. _open-science-tools:

===============================================================================
Open Science Tools
===============================================================================

.. title-hero::
    :icon: fa-solid fa-toolbox
    :summary:
        Equip yourself with the foundational accounts, tools, and practices required to effectively contribute to Open Science and collaborative research.

.. tags:: getting-started, open-science-101, orcid, zenodo, earthdata, git, tools

.. contributors::
    :location: Palisades, NY

    - :name: TOPSTSCHOOL Development Team
    - :email: TOPSTSCHOOL@gmail.com
    - :headshot: https://avatars.githubusercontent.com/u/16084170?s=200&v=4
    - :github: https://github.com/ciesin-geospatial
    - :youtube: https://www.youtube.com/@TOPSTSCHOOL

In the world of open science, certain digital tools and platforms are
indispensable for sharing research, collaborating with peers, and managing
your scientific identity. Before diving into your open science journey,
setting up accounts on some key platforms will empower you to fully
participate in this transparent, collaborative ecosystem. Below, we'll walk
through the importance of each account, real-world use cases, and practical
examples of how they are utilized in open science workflows.


These are some of the open science platforms the SCHOOL project used:

- `GitHub <https://github.com>`_: for code hosting, collaboration, and version control.
- `ORCID <https://orcid.org>`_: for creating a persistent researcher ID.
- `Zenodo <https://zenodo.org>`_: for archiving datasets, code, and obtaining DOIs.
- `NASA EarthData <https://urs.earthdata.nasa.gov/users/new>`_: for accessing Earth observation data.

-------------------------------------------------------------------------------
GitHub
-------------------------------------------------------------------------------

.. image:: https://github.blog/wp-content/uploads/2023/10/Collaboration-DarkMode-2.png?w=1200
    :alt: GitHub banner

:term:`GitHub` is essential for version control, collaboration, and open-source 
publication. GitHub is also a vibrant community where you can contribute to 
projects, share data, and collaborate with fellow researchers from all over 
the world. Whether you're a beginner or a seasoned coder, GitHub
provides the tools you need to manage projects, contribute to
:term:`Open Science`, and share your findings.

.. dropdown:: Importance for Open Science

    - Version control, collaboration, and code review.
    - Transparency and reproducibility.
    - Publishing packages, data, and workflows.

.. _creating-github-account:

**Steps to create your GitHub account:**

#. Go to https://github.com and click **Sign up**.
#. Provide username, email, and password.
#. Verify your email.
#. Choose the **Free** plan.
#. Visit the `Hello World tutorial <https://docs.github.com/en/get-started/start-your-journey/hello-world>`_.

.. image:: https://octodex.github.com/images/NUX_Octodex.gif
    :align: center
    :alt: GitHub Octocat
    :width: 500

.. _securing-your-github-account:

**Securing GitHub:**

As of March 2023, GitHub required all users who contribute code on GitHub to 
enable one or more forms of two-factor authentication (2FA). 
Here’s a detailed guide on securing your GitHub account. 
All the security settings are accessible using the same steps. 
Navigate to :menuselection:`Profile --> Settings --> Password and authentication`.

.. carousel::
    :show_controls:
    :show_fade:
    :show_indicators:

    .. image:: ../../../_assets/guides/github-secure-profile.png
        :alt: Navigate to your profile - GitHub
        :class: transparent-border no-rounded-corners

    .. image:: ../../../_assets/guides/github-secure-settings.png
        :alt: Select Settings - GitHub
        :class: transparent-border no-rounded-corners

    .. image:: ../../../_assets/guides/github-secure-password.png
        :alt: Choose Password and authentication - GitHub
        :class: transparent-border no-rounded-corners


 
.. tab-set::

    .. tab-item:: Two-factor Authentication (2FA)

        We strongly recommend that you configure 2FA for your account that 
        can help keep your account secure.  Here's how to set it up:

        .. image:: ../../../_assets/guides/github-secure-2fa.png
            :align: center
            :alt: Two-factor authentication - GitHub
            :scale: 60

    

    .. tab-item:: Adding a Passkey

        You can add passkeys to your account so that you can sign in safely
        and easily, without requiring a password and two-factor
        authentication. 

        If you use two-factor authentication (2FA), passkeys satisfy both password and 2FA
        requirements, so you can complete your sign in with a single step. If
        you don't use 2FA, using a passkey will skip the requirement to verify
        a new device via email.

        .. image:: ../../../_assets/guides/github-secure-passkeys.png
            :align: center
            :alt: Passkeys - GitHub
            :scale: 60

        - Under the "Passkeys" section, click the button which says "Add a
          passkey" to begin the a process.
        - Follow the setup instructions and remaining prompts to complete the
          setup. [#]_ At the prompt, follow the steps outlined by the passkey provider.
        - On the next page, review the information confirming that a passkey
          was successfully registered, then click Done.

    .. tab-item:: Connect with SSH |badge-new|

            You can access and write data in repositories on GitHub using SSH
            (Secure Shell Protocol). When you connect via SSH, you
            authenticate using a private key file on your local machine. When
            you set up SSH, you will need to generate a new private SSH key
            and add it to the SSH agent. You must also add the public SSH key
            to your account on GitHub before you use the key to authenticate
            or sign commits.

            `Learn more <https://docs.github.com/en/authentication/connecting
            -to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to
            -the-ssh-agent>`_ |chevron-right|

            .. tip::

                Using the SSH protocol, you can connect and authenticate to
                remote servers and services. With SSH keys, you can connect to
                GitHub without supplying your username and personal access
                token at each visit. You can also use an SSH key to sign
                commits.



.. _creating-orcid-account:

-------------------------------------------------------------------------------
ORCID
-------------------------------------------------------------------------------

:term:`ORCID` provides a globally recognized researcher ID.
 

**Steps to create your ORCID:**

#. Visit https://orcid.org/register.
#. Provide name, email, and password.
#. Set visibility (recommended: **Everyone**).
#. Verify your email.


.. tip::

    Set your visibility preferences. :term:`ORCID` gives you control over the
    privacy of your information. You can set your profile to be:

    - **Everyone.** Anyone can see your information.
    - **Trusted parties.** Only trusted parties (like your institution) can
      view your profile.
    - **Only me.** Only you can see your information.

    It is best to keep it **Everyone** to maximize visibility for your work in
    :term:`Open Science`, but you can always change it later.

.. _customizing-orcid-account:

**Customize and link your ORCID:**

- Add publications, affiliations, and link to GitHub.
- Keep your profile updated.

.. figure:: ../../../_assets/guides/orcid-github-link.png
    :align: center
    :alt: Link ORCID with GitHub



Your ORCID profile is a living document. As your career progresses, be sure to
keep it updated with your latest contributions, projects, and affiliations.
This is especially important in :term:`Open Science`, where collaboration and
visibility are key. Set a reminder to check and update your profile every few
months. That way, your information stays fresh and accurate.

With your ORCID account ready, you're now one step closer to engaging fully
with the Open Science community.   



.. _about-zenodo:

-------------------------------------------------------------------------------
Zenodo
-------------------------------------------------------------------------------

.. image:: https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Zenodo-gradient-square.svg/1200px-Zenodo-gradient-square.svg.png
    :alt: Zenodo banner

Zenodo is a versatile, :term:`open access` :term:`data repository` developed
under the European OpenAIRE program and operated by CERN. Launched to support
the open science movement, Zenodo provides a platform for researchers to
share, publish, and archive a wide variety of research outputs, including
datasets, software, publications, and multimedia. It is an indispensable tool
for scientists committed to the principles of open science, ensuring that
their work is easily findable, accessible, citable, and reusable.

.. dropdown:: Importance in Open Science

    - **Long-Term Preservation and Accessibility.** Zenodo ensures that
      research outputs are archived securely and remain accessible over the
      long term. By partnering with CERN, a world leader in data preservation,
      Zenodo offers robust infrastructure that guarantees your work will not
      be lost or forgotten.
    - **DOIs for Every Output.** One of Zenodo's most powerful features is its
      ability to assign DOIs (Digital Object Identifiers) to all research
      outputs. This feature gives your work a permanent, citable reference,
      ensuring that you receive proper credit and recognition.
    - **Supporting Transparency and Reproducibility.** Zenodo ensures that
      research outputs are openly available and reproducible. By archiving
      data and software with detailed :term:`metadata` and :term:`licensing`
      information, researchers make it easier for others to validate findings
      and build upon existing work.
    - **Integration with GitHub.** Zenodo integrates seamlessly with GitHub, a
      popular platform for hosting code and collaborating on software
      projects. Researchers can set up Zenodo to automatically archive GitHub
      repositories, creating versioned DOIs for each software release.



.. _creating-zenodo-account:

**Steps to create a Zenodo account:**

#. Go to https://zenodo.org.
#. Sign up or use GitHub/ORCID to log in.

**Linking with GitHub and ORCID:**

.. carousel::
    :show_controls:
    :show_fade:
    :show_indicators:

    .. image:: ../../../_assets/guides/zenodo-choose-profile.png
    .. image:: ../../../_assets/guides/zenodo-link-accounts.png
    .. image:: ../../../_assets/guides/zenodo-link-all.png

-------------------------------------------------------------------------------
NASA EarthData
-------------------------------------------------------------------------------


:term:`NASA` `EarthData`_ is a web-based system that provides global access to
Earth science data from NASA's Earth Observing System Data and Information
System (EOSDIS [#]_). EOSDIS manages, stores, and distributes a vast array of
Earth science data gathered from NASA's Earth Observing satellites and field
measurement programs. These datasets encompass critical variables like
atmospheric composition, oceanography, land cover, climate, natural disasters,
and more.

.. dropdown:: Importance in Open Science

    NASA EarthData embodies the principles of open science by offering free,
    unrestricted access to data that is crucial for understanding our planet.
    In line with the :term:`FAIR` principles |html-dash| **Findable**,
    **Accessible**, **Interoperable**, and **Reusable** |html-dash| NASA
    EarthData makes complex scientific information available in a way that
    fosters :term:`transparency`, :term:`reproducibility`, and
    :term:`collaborative research`.

    - **Promoting Transparency and Reproducibility.** By providing
      unrestricted access to high-quality environmental data, NASA EarthData
      ensures that research findings are reproducible and verifiable.
      Scientists from anywhere in the world can use the same datasets, run
      their own analyses, and compare results, which strengthens the
      credibility of scientific research.
    - **Enabling Interdisciplinary Collaboration.** Environmental challenges,
      such as climate change, require input from multiple scientific
      disciplines. NASA EarthData facilitates this by offering diverse
      datasets that can be used across fields like meteorology, ecology,
      sociology, and economics. This fosters a spirit of collaboration and
      cross-pollination of ideas.
    - **Supporting Global Efforts to Tackle Environmental Issues.** From
      climate change to disaster management, NASA `EarthData`_ provides
      critical insights that inform global efforts to protect the planet. Open
      access to this data empowers not just scientists but also policymakers,
      educators, and activists working toward environmental sustainability.

Researchers, scientists, policymakers, and educators worldwide use NASA
EarthData to address pressing scientific questions and societal challenges. For researchers working with Earth science data, NASA EarthData provides
access to extensive datasets.

.. tab-set::

    .. tab-item:: Use cases

        - **Climate Change Research.** NASA `EarthData`_ provides researchers
          with critical information on global temperature patterns, ice sheet
          dynamics, sea level rise, and carbon dioxide concentrations. Using
          this data, climate scientists can model future scenarios and develop
          strategies to mitigate climate change effects.
        - **Natural Disaster Monitoring and Response.** NASA EarthData plays a
          pivotal role in disaster management by offering near-real-time data
          on hurricanes, wildfires [#]_, earthquakes [#]_, and other natural
          disasters. [#]_ This data is crucial for tracking the progression of
          a disaster and coordinating response efforts.
        - **Environmental Justice and Health Research.** Researchers and
          policy makers use NASA `EarthData`_ to study the environmental
          factors affecting human health, such as air quality [#]_ and water
          contamination. [#]_ This data helps identify regions
          disproportionately affected by pollution and guides efforts toward
          achieving environmental justice. [#]_
        - **Agriculture, Water Resource Management and Food Security.**
          Agricultural scientists use data from NASA EarthData to monitor crop
          health, predict yields, and understand the impacts of drought and
          other climate-related factors. This information is essential for
          ensuring food security in vulnerable regions.

    .. tab-item:: Why is it so important?

        - **Global Access to Critical Environmental Data.** NASA EarthData
          democratizes access to some of the most comprehensive Earth science
          datasets available. With data spanning decades, it provides a
          historical perspective that can help researchers analyze trends and
          patterns over time. This kind of data is critical for climate
          studies, disaster management, and environmental monitoring.
        - **High-Quality and Reliable Data.** All data hosted on NASA
          `EarthData`_ is meticulously curated and validated, making it highly
          reliable for research and analysis. These datasets come from
          state-of-the-art satellite missions and are updated frequently,
          providing researchers with up-to-date information on global
          environmental changes.
        - **Supporting Scientific Collaboration.** :term:`Open Access` to NASA
          EarthData encourages collaboration among scientists across different
          disciplines and geographic locations. For example, a climate
          scientist studying global warming in the Arctic can share insights
          and data with an agricultural researcher investigating crop impacts
          in Asia. This interdisciplinary collaboration fosters a holistic
          understanding of Earth's interconnected systems.


.. _creating-nasa-earthdata-account:

**Steps to create an EarthData account:**

#. Visit https://urs.earthdata.nasa.gov/users/new
#. Provide name, email, affiliation, country.
#. Accept terms and verify email.

**Use Cases:**

- Climate change, wildfires, air quality, water quality
- Environmental justice and public health
- Agriculture and disaster response

**Why It Matters:**

- Free, unrestricted global datasets
- Reliable, validated satellite data
- Enables reproducible interdisciplinary research

-------------------------------------------------------------------------------
Required Tools & Technologies
-------------------------------------------------------------------------------

-------------------------------------------------------------------------------
Git (Version Control)
-------------------------------------------------------------------------------

.. image:: ../../../_assets/guides/git-banner.png
    :alt: Git banner

Git is the backbone of collaboration. It tracks changes, branches experiments, and supports teamwork.

**Key Concepts:**

- **Repository** Folder Git tracks
- **Branch** Isolated line of development
- **Commit** A snapshot of change with a message

.. _installing-git:

**Installing Git:**

Visit https://git-scm.com/downloads

   .. tab-set::
       :sync-group: operating-system

       .. tab-item:: Windows
           :sync: windows

           Double-click the downloaded ``.exe`` file and follow the on-screen
           instructions. Accept the default settings unless you have a specific
           reason to modify them..

       .. tab-item:: macOS
           :sync: macos

           Open the ``.dmg`` file, drag the Git application into your
           ``Applications`` folder, and follow any remaining instructions.

       .. tab-item:: Linux
           :sync: linux

           Open your terminal and use the following command based on your Linux
           distribution.

           .. tab-set::

               .. tab-item:: Ubuntu/Debian

                   .. code-block:: shell

                       sudo apt update && sudo apt install git

               .. tab-item:: Fedora/RHEL

                   .. code-block:: shell

                       sudo dnf install git

               .. tab-item:: Arch Linux

                   .. code-block:: shell

                       sudo pacman -S git

Verify install:

    .. code-block:: bash

        git --version

-------------------------------------------------------------------------------
Other Tools
-------------------------------------------------------------------------------

.. tab-set::

    .. tab-item:: VCS

        :term:`Version Control System` like Git and SVN allow you to track
        changes in code, ensuring you never lose work and can collaborate
        seamlessly with others.

    .. tab-item:: IDE

        :term:`Integrated Development Environment (IDE)` like Visual Studio
        Code provide a space to write, debug, and test code with features that
        make your workflow faster and more intuitive.

    .. tab-item:: Data processing tools

        :term:`Data processing tools` like Jupyter Notebook facilitate
        interactive data analysis, letting you run code in chunks, visualize
        outputs, and document results in one place.

    .. tab-item:: Package managers

        :term:`Package managers` like Conda help you manage software libraries
        and environments, ensuring that you're working with the right versions
        of the tools for your project.
          


.. rubric:: References
    :heading-level: 2

.. [#] GitHub Docs - Configuring two-factor authentication 2FA: https://docs.github.com/en/authentication/securing-your-account-with-two-factor-authentication-2fa
.. [#] GitHub Docs - Adding a passkey to your account: https://docs.github.com/en/authentication/authenticating-with-a-passkey/managing-your-passkeys#adding-a-passkey-to-your-account
.. [#] GitHub Docs - Connecting to GitHub with SSH: https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent
.. [#] NASA EarthData - EOSDIS case studies: https://appel.nasa.gov/critical-knowledge/case-studies/appel-case-studies/eosdis-html/
.. [#] NASA Wildfire Data: https://www.earthdata.nasa.gov/topics/human-dimensions/wildfires
.. [#] NASA Earthquake Data: https://www.earthdata.nasa.gov/topics/solid-earth/earthquakes
.. [#] NASA Natural Hazards Portal: https://www.earthdata.nasa.gov/topics/human-dimensions/natural-hazards
.. [#] NASA Air Quality Data: https://www.earthdata.nasa.gov/topics/atmosphere/air-quality
